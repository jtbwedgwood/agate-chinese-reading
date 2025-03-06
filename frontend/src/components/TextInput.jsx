function TextInput({ label, value, setValue }) {
    return (
      <div className="flex flex-col gap-2">
        <label className="text-gray-700 font-semibold">{label}</label>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-400"
          placeholder="Enter topic (e.g., Travel in China)"
        />
      </div>
    );
  }
  
  export default TextInput;
  