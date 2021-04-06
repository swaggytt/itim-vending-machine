import React from "react";
import "./ImageResult.css";
import cone from "./cone.png";
import conesticky from "./conesticky.png";
import conechoc from "./conechoc.png";
import conechocsticky from "./conechocsticky.png";
import coneva from "./coneva.png";
import conevasticky from "./conevasticky.png";

import bread from "./bread.png";
import breadsticky from "./breadsticky.png";
import breadchoc from "./breadchoc.png";
import breadchocsticky from "./breadchocsticky.png";
import breadva from "./breadva.png";
import breadvasticky from "./breadvasticky.png";

const ImageResult = (props) => {
  const base = props.base;
  const sticky = props.sticky;
  const ice = props.ice;
  const stickyMessage =()=>{
      if(sticky){
          return "with stickyrice"
      }
  }
  const result = () => {
    // cone //
    if (base === "cone" && !sticky && ice === "") {
      return cone;
    } else if (base === "cone" && !sticky && ice === "chocolate") {
      return conechoc;
    } else if (base === "cone" && !sticky && ice === "vanilla") {
      return coneva;
    } else if (base === "cone" && sticky && ice === "") {
      return conesticky;
    } else if (base === "cone" && sticky && ice === "chocolate") {
      return conechocsticky;
    } else if (base === "cone" && sticky && ice === "vanilla") {
      return conevasticky;
    }
    // bread //
    else if (base === "bread" && !sticky && ice === "") {
      return bread;
    } else if (base === "bread" && !sticky && ice === "chocolate") {
      return breadchoc;
    } else if (base === "bread" && !sticky && ice === "vanilla") {
      return breadva;
    } else if (base === "bread" && sticky && ice === "") {
      return breadsticky;
    } else if (base === "bread" && sticky && ice === "chocolate") {
      return breadchocsticky;
    } else if (base === "bread" && sticky && ice === "vanilla") {
      return breadvasticky;
    }
  };
  return (
    <div className='icepage'>
      <div className='container'>
        <div className='imgcontainer'>
          <img src={result()} className='iceimg' alt='IceResult' />
        </div>
      </div>
      <div className='result'>
        {base} {ice} {stickyMessage()}
      </div>
    </div>
  );
};
ImageResult.defaultProps = {
  base: "",
  sticky: false,
  ice: "",
};

export default ImageResult;
