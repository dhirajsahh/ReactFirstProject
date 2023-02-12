import React from "react";
import "./tours.css";
import Button from "./Button";
import { useState } from "react";

function Tours({ data }) {
  const [readmore, setReadmore] = useState("readmore");
  const [value, setValue] = useState(false);
  return (
    <div className="container">
      {data.map((list) => {
        const { id, name, info, image, price } = list;
        return (
          <article key={id}>
            <img src={image} alt="hoteliamge" />
            <div className="namecontainer">
              <h4>{name}</h4>
              <div className="price">
                <p>${price}</p>
              </div>
            </div>
            <div className="infosection">
              <p>
                {value ? info : `${info.substring(0, 200)}...`}
                <button
                  className="readmore"
                  onClick={() => {
                    readmore === "readmore"
                      ? setReadmore("readless")
                      : setReadmore("readmore");
                    value === true ? setValue(false) : setValue(true);
                  }}
                >
                  {readmore}
                </button>
              </p>
            </div>
            <div className="buttoncontainer">
              <Button props={list} />
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Tours;
