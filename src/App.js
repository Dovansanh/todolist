import { useState } from "react";

function App() {
  const [value, setValue] = useState('')
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div className="flex gap-8 justify-center h-screen border-red-500 items-center">
      <input
        type='text'
        className='outline-none border border-blue-600 px-4 w-[400px] '
        value={value}
        onChange={handleChange}
      />
      <button
        type="button"
        className="outline-none px-4 bg-blue-500 rounded-md text-white "
      > add</button>
    </div>
  );
}

export default App;
