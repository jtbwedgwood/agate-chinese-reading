GENERATE_TEMPLATE_NO_VOCAB = ("你是一位中文创作助手。请根据以下要求生成一段中文文章：\n"
                     "- 主题：{topic}\n"
                     "- 难度：HSK{level}水平\n"
                     "- 长度：约{length}字\n"
                     "生成符合要求的段落：")

GENERATE_TEMPLATE_WITH_VOCAB = ("你是一位中文创作助手。请根据以下要求生成一段中文文章：\n"
                     "- 主题：{topic}\n"
                     "- 难度：HSK{level}水平\n"
                     "- 长度：约{length}字\n"
                     "- 请尽量使用以下词汇：{vocab}\n"
                     "生成符合要求的段落：")