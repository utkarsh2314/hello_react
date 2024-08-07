import { useState } from "react";
import React from "react";
import "./App.css";

const App = () => {
  const [value, setValue] = useState(0);
  const [limit, setLimit] = useState(0);

  const handleChange = (event) => {
    const value = event.target.value;
    setLimit(Number(value));
  };
  return (
    <>
      <article>
        <header>Counter App to Practice</header>
        <h2>I hate negatives</h2>
        {/* <p>The number you entered is: {limit}</p> */}
        <h3>Set a max limit you want it to reach.</h3>
        <input type="number" id="input" onChange={handleChange}></input>

        <section>
          <h1>{value}</h1>
          <div className="buttons">
            <button
              className="btn"
              disabled={value === 0}
              onClick={() => setValue(value - 1)}
            >
              -
            </button>
            <button
              className="btn"
              disabled={value === limit}
              onClick={() => setValue(value + 1)}
            >
              +
            </button>
          </div>
        </section>
        <footer>&copy; peace out ;-O</footer>
      </article>
    </>
  );
};

export default App;
