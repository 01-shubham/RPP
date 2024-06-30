import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    
    if(count < 10) setCount(count + 1) ;
  };

  const decValue = () => {
    if(count > -10) setCount(count - 1);
  };

  return (
    <>
    <h1 className="bg-black text-center text-white font-bold text-2xl">A basic Counter Project</h1>
      <div className="bg-black h-screen flex justify-center items-center">
        <div className="h-[400px] w-[400px] text-white bg-gray-800 shadow-lg rounded-lg flex flex-col justify-between p-6">
         
          <div className="flex-grow flex items-center justify-center">
            <p className="bg-green-500 text-black text-center text-2xl font-semibold rounded-md p-4">
              Initial Count: {count}
            </p>
          </div>

         
          <div className="flex justify-between mt-4">
            <button
              className="bg-blue-600 text-white rounded-lg px-4 py-2 transition-transform transform hover:scale-105 active:scale-95"
              onClick={addValue}
            >
              Increment
            </button>
            <button
              className="bg-blue-600 text-white rounded-lg px-4 py-2 transition-transform transform hover:scale-105 active:scale-95"
              onClick={decValue}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
