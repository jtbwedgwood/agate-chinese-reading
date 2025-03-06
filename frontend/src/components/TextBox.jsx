function TextBox({ text }) {
    return (
      <div className="border border-gray-300 p-4 mt-4 bg-gray-100 rounded-md min-h-[100px]">
        {text ? text : "Your generated passage will appear here..."}
      </div>
    );
  }
  
  export default TextBox;
  