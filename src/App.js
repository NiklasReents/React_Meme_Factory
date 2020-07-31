import React, { useState, useEffect } from "react";
import { Button, Form, Col } from "react-bootstrap";
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
  const [currentMeme, setCurrentMeme] = useState(1);
  const [topPictureText, setTopPictureText] = useState("");
  const [bottomPictureText, setBottomPictureText] = useState("");
  const memeAPI = "https://api.imgflip.com/get_memes";

  useEffect(() => {
    fetchFunction(setMemes, memeAPI);
  }, []);

  return (
    <div className="App">
      <div id="formWrapper">
        <h1>Create Some Dank Memes!</h1>
        <div>
          <Form>
            <Form.Row>
              <Col>
                {/*onChange={(event) => {
              setTopPictureText(event.target.value);
            }}*/}
                <Form.Control
                  id="toptext"
                  type="text"
                  placeholder="top caption"
                />
              </Col>
              <Col>
                {/*onChange={(event) => {
              setBottomPictureText(event.target.value);
            }}*/}
                <Form.Control
                  id="bottomtext"
                  type="text"
                  placeholder="bottom caption"
                />
              </Col>
              <Button
                className="button-margin"
                variant="danger"
                onClick={() => {
                  const firstvalue = document.getElementById("toptext").value;
                  setTopPictureText(firstvalue);
                  const secondvalue = document.getElementById("bottomtext")
                    .value;
                  setBottomPictureText(secondvalue);
                }}
              >
                Create Meme!
              </Button>
            </Form.Row>
          </Form>
        </div>
        <Form>
          <Form.Row>
            <Button
              className="button-margin"
              onClick={() => {
                const previousMeme = currentMeme;
                if (previousMeme > 0) setCurrentMeme(previousMeme - 1);
                else setCurrentMeme(memes.length - 1);
              }}
              type="button"
            >
              Previous Picture
            </Button>
            <Button
              className="button-margin"
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
            </Button>
            <Button
              className="button-margin"
              variant="dark"
              onClick={() => {
                setCurrentMeme([Math.floor(Math.random() * memes.length)]);
              }}
              type="button"
            >
              Generate Random Meme
            </Button>
          </Form.Row>
        </Form>
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
