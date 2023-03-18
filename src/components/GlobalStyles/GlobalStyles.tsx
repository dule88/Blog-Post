import React from "react";
import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = React.memo(
  createGlobalStyle`${css`
    * {
      margin: 0;
      box-sizing: border-box;
      padding: 0;
      border: 0;
      font-family: "Montserrat", sans-serif;
    }

    html {
      font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
      background-color: white;
      color: white;
    }
    
    body {
      min-height: 100vh;
      font-size: 1.5rem;
      background-color: #676363;
      box-sizing: border-box;
    }
    
    input,
    textarea,
    button,
    select {
      font: inherit;
      margin-bottom: 1em;
    }
    
    header {
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      background-color: purple;
      color: whitesmoke;
      position: sticky;
      top: 0;
    }
    
    nav {
      display: flex;
      justify-content: center;
    
    }
    
    nav ul {
      list-style-type: none;
    }
    
    nav ul li {
      display: inline-block;
      margin-right: 1rem;
    }
    
    nav a, nav a:visited {
      color: #fff;
      text-decoration: none;
    }
    
    nav a:hover, nav a:focus {
      text-decoration: underline;
    }
    
    main {
      max-width: 500px;
      margin: auto;
    }
    
    section {
      margin-top: 1em;
      display: flex;
      flex-direction: column;
      align-items: center;

    }
    
    article {
      margin: 0.5em;
      border: 1px solid #000;
      border-radius: 10px;
      padding: 1em;
    }
    
    h1 {
      font-size: 3.5rem;
    }
    
    h2 {
      margin-bottom: 1rem;
    
    }
    
    p {
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.4;
      font-size: 1.2rem;
      margin: 0.5em 0;
    }
    
    form {
      display: flex;
      flex-direction: column;
      
    }
    
    textarea {
      height: 200px;
    }
    
    .postCredit {
      font-size: 1rem;
    }
    
    .postCredit a, 
    .postCredit a:visited {
      margin-right: 0.5rem;
      color: black;
    }
    
    .postCredit a:hover, 
    .postCredit a:focus {
      color: hsla(0, 0%, 0%, 0.75);
    }
    
    .excerpt {
      font-style: italic;
    }
    
    .reactionButton {
      margin: 0 0.25em 0 0;
      background: transparent;
      border: none;
      color: #000;
      font-size: 1rem;
    }
    
    .deleteButton {
      background-color: palevioletred;
      color: white;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
      margin-top: 10px;
    }

    th,
    td {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }
  `}`,
);
