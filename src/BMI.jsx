import React from "react";
import "./BMI.css";
const BMI = () => {
  const Check = (event) => {
    event.preventDefault();
    let box = document.getElementById("box");
    let card = document.querySelector(".card");
    box.style.display = "grid";
    card.style.height = "600px";
    let result2 = document.getElementById("result2");
    let result1 = document.getElementById("result1");
    let w = document.getElementById("w").value;
    let h = document.getElementById("h").value;
    let trueh = !isNaN(h);
    let truew = !isNaN(w);
    if (trueh && truew) {
      let bmi = (w / (h / 100) ** 2).toFixed(1);
      result1.innerHTML = "Result: " + bmi;
      if (bmi < 16) result2.innerHTML = "servere thinness";
      else if (bmi >= 16 && bmi < 17) result2.innerHTML = "moderate thinness";
      else if (bmi >= 17 && bmi < 18.5) result2.innerHTML = "mild thinness";
      else if (bmi >= 18.5 && bmi < 25) result2.innerHTML = "normal";
      else result2.innerHTML = "Overweight";
    } else if (!trueh) {
      alert("please enter the hight");
      h.innerHTML = "";
      w.innerHTML = "";
    }
     else {
      alert("please enter the weight");
      h.innerHTML = "";
      w.innerHTML = "";
    }

  };
  return (
    <div className="bg-img flex justify-center items-center">
      <div className="card bg-gray-300 rounded-lg w-2/5 h-3/5 p-10">
        <h1 className="text-black font-medium text-2xl">BMI Calculator </h1>
        <form className="mt-10">
          <div>
            <label className="text-black font-medium text-lg">Weight</label>
            <input
              type="text"
              className="w-full h-10 p-2 rounded-lg bg-gray-200 text-black outline-none focus-within:"
              id="w"
            />
            <br />
            <label className="text-black font-medium text-lg">Height</label>
            <input
              type="text"
              className="w-full h-10 p-2 rounded-lg bg-gray-200 text-black outline-none focus-within:"
              id="h"
            />
          </div>
          <button
            className="items-center text-center bg-white w-full h-10 text-xl rounded-lg mt-10 hover:bg-orange-500 hover:text-white duration-75 ease-in"
            onClick={Check}
          >
            Check!
          </button>
        </form>
        <div
          className="h-2/5 bg-slate-400  justify-center items-center text-2xl rounded-lg mt-5 hidden hover:grid text-white font-mono text-center"
          id="box"
        >
          <p id="result1"></p>
          <p id="result2"></p>
        </div>
      </div>
    </div>
  );
};

export default BMI;
