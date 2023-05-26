import React from "react";
import { useParams } from "react-router-dom";
import TextEditor from "./pages/textEditor";

function Component() {
  const { parent = "", child = "" } = useParams();
  return (
    <>
      {parent === "Container1" && child === "WSIWYG Text Editer" ? (
        <TextEditor />
      ) : (
        <div className="bgContainerParent">
          <h3>
            Right now you are in {parent} and  {child}
          </h3>
          <img
            alt="boy"
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/random-joke-img.png"
            className="boyImage"
          />
        </div>
      )}
    </>
  );
}
export default Component;
