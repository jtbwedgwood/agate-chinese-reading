function GenerateButton({ onClick, loading }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded flex justify-center items-center gap-2 ${
        loading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'
      }`}
    >
      {loading ? (
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      ) : (
        "Generate Passage"
      )}
    </button>
  );
}

export default GenerateButton;
