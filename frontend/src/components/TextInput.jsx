function TextInput({ label, value, setValue, onRandomize }) {
    return (
      <div className="flex flex-col w-full">
        <label className="text-gray-700 font-semibold">{label}</label>
        <div className="flex gap-2 w-full justify-center">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="border border-gray-300 px-2 py-1 rounded w-full"
            placeholder="Enter topic (e.g., Travel)"
          />
          {onRandomize && (
            <button
              onClick={onRandomize}
              className="text-3xl hover:text-blue-600 cursor-pointer"
              title="Random topic"
            >
              🔄
            </button>
          )}
        </div>
      </div>
    );
  }
  
  export default TextInput;
  