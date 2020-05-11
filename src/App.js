import React, { useState, useEffect } from "react";

const fetchFunction = (setData, memeAPI) => {
  fetch(memeAPI)
    .then((result) => result.json())
    .then((finalResult) => {
      setData(finalResult.data.memes[9]);
    })
    .catch((error) => console.log(error));
};

function App() {
  const [data, setData] = useState("");
  const memeAPI = "https://api.imgflip.com/get_memes";
  console.log(memeAPI);

  useEffect(() => {
    fetchFunction(setData, memeAPI);
  }, []);

  return (
    <div className="App">
      <h1>Create Some Dank Memes!</h1>
      <div>{data ? <img src={data.url} alt="meme" /> : null}</div>
    </div>
  );
}

export default App;
