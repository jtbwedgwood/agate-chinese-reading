function GenerateButton({ onClick, loading, text }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`min-w-[22rem] min-h-[3rem] bg-blue-500 hover:bg-blue-600 text-white text-lg font-bold py-3 px-6 rounded flex justify-center items-center gap-2 ${
        loading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'
      }`}
    >
      {loading ? (
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      ) : (
        text
      )}
    </button>
  );
}

export default GenerateButton;
