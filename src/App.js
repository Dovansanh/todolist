import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  const [value, setValue] = useState('')
  const [list, setList] = useState([])
  console.log(list);
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const handleClick = () => {
    if (value != '' ) {
      if(!list.includes(value)) {
        setList(state => [...state, value])
      } else {
        toast.error('tim kiem da co')
      }
    } else {
      toast.error('ko dc de trong')
    }
    
    setValue('')
  }
  console.log(('b a a').replace(/\s+/g, ''));
  const handleDelete = (id) => {
    console.log(id);
    const newList = [...list]
    newList.splice(id, 1)
    setList(newList)
  }
  const renderList = () => {
    if (list.length > 0) {
      return list.map((value, key) => {
        return <li className="flex w-[400px] justify-between my-2" key={key}>
          {value}
          <span className="cursor-pointer"  onClick={() => handleDelete(key)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </span>
        </li>

      })
    }
  }

  return (
    <>
      <div className="flex  bg-blue-600 flex-col gap-8 justify-center h-screen items-center">
        <div className="flex flex-col bg-white p-4 gap-8 justify-center w-[500px] min-h-[300px] rounded-md  items-center">
          <div className="flex gap-8 grid-cols-3">
            <input
              value={value}
              type='text'
              className='outline-none border border-blue-600 px-4 col-span-2 w-[300px] '
              onChange={handleChange}
            />
            <button
              type="button"
              className="outline-none px-4 bg-blue-500 rounded-md text-white "
              onClick={handleClick}
            > add</button>
          </div>
          <ul>
            {renderList()}
          </ul>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
