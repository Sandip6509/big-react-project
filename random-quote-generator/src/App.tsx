import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

interface AdviceResponse {
  slip: {
    advice: string;
  };
}
function App() {
  const [advice, setAdvice] = useState<string>("");

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response: AxiosResponse<AdviceResponse>) => {
        setAdvice(response.data.slip.advice);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="h-screen flex justify-center items-center text-center bg-gradient-to-b from-black to-black bg-opacity-30 bg-my-custom-image bg-no-repeat bg-cover bg-center">
      <div className="bg-gray-200 w-2/5 md:w-[60%] h-2/5 md:h-[30%] flex flex-col justify-center items-center rounded-lg shadow-md p-4">
        <h1 className="h-full flex items-center">{advice}</h1>
        <button className="relative outline-none text-white bg-blue-500 border border-blue-600 rounded-full uppercase px-5 py-1 cursor-pointer hover:rotate-3 hover:translate-x-4 hover:-translate-y-3 hover:bg-blue-400 hover:border-blue-400 transition duration-700 ease-in-out" onClick={fetchAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
