import React from "react";

function Link(props) {

  return (
    <div className="link">
      <div className="link-1">{props.url}</div>
      <div className="link-b">
        <div className="link-2">{props.shortUrl}</div>
        <button 
          style={{ backgroundColor: props.bgColor }} 
          onClick={() => { props.onCopy(props.id); navigator.clipboard.writeText(props.shortUrl) }}
          onMouseEnter={() => props.onHover(props.id) }
          onMouseLeave={() => props.offHover(props.id) }
        >
          {props.copyState}
        </button>
      </div>
    </div>
  );
}

export default Link;