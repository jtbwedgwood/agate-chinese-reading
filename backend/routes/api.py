import os

from flask import Blueprint, request, jsonify
from langchain.prompts import PromptTemplate
from langchain_openai import ChatOpenAI

from routes import prompts
from routes.models import Vocabulary


CURRENT_USER = 1

# Create a Blueprint instance
api_bp = Blueprint('api', __name__, url_prefix='/api')

@api_bp.route('/example', methods=['GET'])
def example_route():
    return jsonify({"message": "This is an example API response"})

@api_bp.route('/generate', methods=['POST'])
def generate_passage():
    llm_generate = ChatOpenAI(model_name="gpt-4o-mini", temperature=0.7, openai_api_key=os.getenv("OPENAI_API_KEY"))

    data = request.get_json()
    topic = data.get('topic', '任意主题')  # default to random if not provided
    level = data.get('level', 3)
    length = data.get('length', 200)
    include_vocab = data.get('include_vocab', True)
    vocab_text = ""
    if include_vocab:
        # Fetch user's vocab list from DB and join a few into a string
        vocab_list = [v.word for v in Vocabulary.query.filter_by(user_id=CURRENT_USER).limit(20)]
        vocab_text = "、".join(vocab_list)  # join with Chinese comma
    # Fill the prompt
    prompt = PromptTemplate(input_variables=["topic","level","length","vocab"],
                            template=prompts.GENERATE_TEMPLATE_NO_VOCAB)
    llm_input = prompt.format(topic=topic, level=level, length=length, vocab=vocab_text)
    # Call OpenAI for generation
    passage = llm_generate.predict(llm_input)
    return jsonify({"passage": passage})