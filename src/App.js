import React, { useState, useEffect } from "react";
import "./styles.css";

const fetchFunction = (setMemes, memeAPI) => {
  fetch(memeAPI)
    .then((result) => result.json())
    .then((finalResult) => {
      setMemes(finalResult.data.memes);
    })
    .catch((error) => console.log(error));
};

function App() {
  const [memes, setMemes] = useState([]);
  const [currentMeme, setCurrentMeme] = useState(0);
  const [topPictureText, setTopPictureText] = useState("");
  const [bottomPictureText, setBottomPictureText] = useState("");
  const memeAPI = "https://api.imgflip.com/get_memes";

  useEffect(() => {
    fetchFunction(setMemes, memeAPI);
  }, []);

  return (
    <div className="App">
      <h1>Create Some Dank Memes!</h1>
      <div id="formWrapper">
        <span>
          {/*onChange={(event) => {
              setTopPictureText(event.target.value);
            }}*/}
          <input id="toptext" type="text" placeholder="top caption" />
        </span>
        <span>
          {/*onChange={(event) => {
              setBottomPictureText(event.target.value);
            }}*/}
          <input id="bottomtext" type="text" placeholder="bottom caption" />
        </span>
        <button
          onClick={() => {
            const firstvalue = document.getElementById("toptext").value;
            setTopPictureText(firstvalue);
            const secondvalue = document.getElementById("bottomtext").value;
            setBottomPictureText(secondvalue);
          }}
        >
          Create Meme!
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            const previousMeme = currentMeme;
            if (previousMeme > 0) setCurrentMeme(previousMeme - 1);
            else setCurrentMeme(memes.length - 1);
          }}
          type="button"
        >
          Previous Picture
        </button>
        <button
          onClick={() => {
            const nextMeme = currentMeme;
            if (nextMeme < memes.length - 1) setCurrentMeme(nextMeme + 1);
            else {
              setCurrentMeme(0);
            }
          }}
          type="button"
        >
          Next Picture
        </button>
        <button
          onClick={() => {
            setCurrentMeme([Math.floor(Math.random() * memes.length)]);
          }}
          type="button"
        >
          Generate Random Meme
        </button>
      </div>
      <div>
        <div className="container">
          <div className="text-block">
            <h1>{topPictureText}</h1>
          </div>
          <div>
            {memes[currentMeme] ? (
              <img
                id="meme_image"
                src={memes[currentMeme].url}
                alt="Meme"
                style={{ width: "100%" }}
              />
            ) : (
              []
            )}
          </div>
          <div className="text-block-2">
            <h1>{bottomPictureText}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
