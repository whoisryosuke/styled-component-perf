import React from "react";
import styled from "styled-components";

const activeButton = isActive => {
  let style;
  if (isActive) {
    style = `
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15) inset,
      0 0 6px rgba(0, 0, 0, 0.2) inset;
    border-color: #000\9;
    `;
  }
  style = `${style}
  :active {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15) inset,
      0 0 6px rgba(0, 0, 0, 0.2) inset;
    border-color: #000\9;
  }`;
  return style;
};

const BaseButton = ({ className, children, style, onClick }) => (
  <button
    className={`${className} button`}
    style={style}
    onClick={onClick}
  >
    {children}
  </button>
);


/**
 * Pure CSS and React button.
 */
const Button = styled(BaseButton)`
  font-family: inherit;
  font-size: 100%;
  padding: 0.5em 1em;
  color: #444; /* rgba not supported (IE 8) */
  color: rgba(0, 0, 0, 0.8); /* rgba supported */
  border: 1px solid #999; /*IE 6/7/8*/
  border: none rgba(0, 0, 0, 0); /*IE9 + everything else*/
  background-color: #e6e6e6;
  text-decoration: none;
  border-radius: 2px;
  
  :hover {
    background-image: linear-gradient(
      transparent,
      rgba(0, 0, 0, 0.05) 40%,
      rgba(0, 0, 0, 0.1)
    );
  }

  :focus {
    outline: 0;
  }

  ${props => activeButton(props.active)};


  ${props =>
    props.disabled
      ? `border: none;
    background-image: none;
    /* csslint ignore:start */
    filter: alpha(opacity=40);
    /* csslint ignore:end */
    opacity: 0.40;
    cursor: not-allowed;
    box-shadow: none;
    pointer-events: none;`
      : ``}

  ${props => (props.hidden ? `display: none;` : ``)}
    
  ${props =>
    props.primary
      ? `background-color: rgb(0, 120, 231);
    color: #fff;`
      : ``}

  ${props =>
    props.rounded
      ? `border-radius:1em;`
      : ``}
`;

/** @component */
export default Button;
