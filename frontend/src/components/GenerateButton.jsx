function GenerateButton({ onClick }) {
    return (
      <button
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Generate Passage
      </button>
    );
  }
  
  export default GenerateButton;
  