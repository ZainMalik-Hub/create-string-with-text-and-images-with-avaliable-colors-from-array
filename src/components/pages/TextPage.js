import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import bulb from "../../assets/bulb.svg";
import underlineWind from "../../assets/underlineWind.svg";
import boom from "../../assets/boom.svg";
import rainbow from "../../assets/rainbow.svg";
import atom from "../../assets/atom.svg";
import underlineSawtooth from "../../assets/underlineSawtooth.svg";
import smiley from "../../assets/smiley.svg";
import underlineWaves from "../../assets/underlineWaves.svg";

function Text() {
  const [notes, setnotes] = useState();
  const url = "https://www.entwurf.co.uk/api/code-test/7439028";
  useEffect(() => {
    getTextApi();
  }, []);

  const getTextApi = () => {
    axios
      .get(url)
      .then((response) => {
        setnotes(response?.data);
      })
      .catch((error) => console.error(`Error: ${error} `));
  };
  let text = notes?.data?.sectionTextCopy;

  notes?.data?.keywordList.forEach((v) => {
    if (text.includes(v.keyword)) {
      var hh = "";
      if (v.svg === "bulb") {
        hh = bulb;
      }
      if (v.svg === "underlineWind") {
        hh = underlineWind;
      }
      if (v.svg === "boom") {
        hh = boom;
      }
      if (v.svg === "rainbow") {
        hh = rainbow;
      }
      if (v.svg === "atom") {
        hh = atom;
      }
      if (v.svg === "underlineSawtooth") {
        hh = underlineSawtooth;
      }
      if (v.svg === "smiley") {
        hh = smiley;
      }
      if (v.svg === "underlineWaves") {
        hh = underlineWaves;
      }

      text = text.replace(
        v.keyword,
        `<span style=' color:${v.color}'>${
          v.keyword
        }<img style='width:${"26px"}'  src=${hh}> </span>`
      );
    }
  });

  return (
    <div style={{ backgroundColor: "blue", display: "flex" }}>
      <div
        style={{ fontSize: "30px", width: "400px" }}
        dangerouslySetInnerHTML={{ __html: `${text}` }}></div>
    </div>
  );
}
export default Text;
