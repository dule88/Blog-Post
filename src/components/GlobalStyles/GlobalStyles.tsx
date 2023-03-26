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
      width: 100%;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      background-color: purple;
      color: whitesmoke;
      margin-bottom: 1rem;
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
    nav a,
    nav a:visited {
      color: #fff;
      text-decoration: none;
    }
    nav a:hover,
    nav a:focus {
      text-decoration: underline;
    }
    main {
      width: 80%;
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
      padding: 1rem;
      overflow: auto;
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
    table {
      width: 100%;
    }
    tr {
      display: flex;
    }
    th,
    td {
      border: 1px solid #dddddd;
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 10px;
    }
    .postTitle {
      color: white;
      text-decoration: none;
    }
    details {
      width: 100%;
      margin: 0 auto;
      background-color: #333;
      margin-bottom: 0.5rem;
      box-shadow: 0.1rem 1rem -0.5rem rgba(0, 0, 0, 0.4);
      border-radius: 5px;
    }
    summary {
      padding: 1rem;
      display: block;
      background: #333;
      padding-left: 2.2rem;
      position: relative;
      cursor: pointer;
    }
    summary:before {
      content: "";
      border-width: 0.4rem;
      border-style: solid;
      border-color: transparent transparent transparent #fff;
      position: absolute;
      top: 1.3rem;
      left: 1rem;
      transform: rotate(0);
      transform-origin: 0.2rem 50%;
      transition: 0.25s transform ease;
    }
    details[open] > summary:before {
      transform: rotate(90deg);
    }
    details summary::-webkit-details-marker {
      display: none;
    }
    details > ul {
      padding-bottom: 1rem;
      margin-bottom: 0;
    }
    .editButton {
      background: #6294b5;
      background-image: -webkit-linear-gradient(top, #6294b5, #19394d);
      background-image: -moz-linear-gradient(top, #6294b5, #19394d);
      background-image: -ms-linear-gradient(top, #6294b5, #19394d);
      background-image: -o-linear-gradient(top, #6294b5, #19394d);
      background-image: linear-gradient(to bottom, #6294b5, #19394d);
      -webkit-border-radius: 28;
      -moz-border-radius: 28;
      border-radius: 28px;
      font-family: Arial;
      color: #ffffff;
      font-size: 15px;
      padding: 10px 20px 10px 20px;
      text-decoration: none;
      margin-top: 10rem;
    }
    .editButton:hover {
      background: #1c5170;
      background-image: -webkit-linear-gradient(top, #1c5170, #056ea6);
      background-image: -moz-linear-gradient(top, #1c5170, #056ea6);
      background-image: -ms-linear-gradient(top, #1c5170, #056ea6);
      background-image: -o-linear-gradient(top, #1c5170, #056ea6);
      background-image: linear-gradient(to bottom, #1c5170, #056ea6);
      text-decoration: none;
    }
    .backButton {
      background: #333;
      -webkit-border-radius: 28;
      -moz-border-radius: 28;
      border-radius: 28px;
      font-family: Arial;
      color: #ffffff;
      font-size: 20px;
      padding: 10px 20px 10px 20px;
      text-decoration: none;
    }
    .backButton:hover {
      background: #4b4d4f;
      text-decoration: none;
    }
    .deleteUserButton {
      -webkit-border-radius: 28;
      -moz-border-radius: 28;
      border-radius: 28px;
      font-family: Arial;
      color: #ffffff;
      font-size: 15px;
      background: #733838;
      padding: 10px 20px 10px 20px;
      text-decoration: none;
      margin: auto;
    }
    .deleteUserButton:hover {
      background: #7d2929;
      text-decoration: none;
    }
    .deletePostButton {
      -webkit-border-radius: 28;
      -moz-border-radius: 28;
      border-radius: 28px;
      font-family: Arial;
      color: #ffffff;
      font-size: 15px;
      background: #750e0e;
      padding: 10px 20px 10px 20px;
      text-decoration: none;
      margin: auto;
    }
    .deletePostButton:hover {
      background: #782727;
      text-decoration: none;
    }
    .paginations {
      font-family: Arial;
      color: #ffffff;
      font-size: 15px;
      background: #333;
      padding: 10px 20px 10px 20px;
      text-decoration: none;
    }
    .paginations:hover {
      background: #4b4d4f;
      text-decoration: none;
    }
    @media only screen and (max-width: 768px) {
      .responsiveButtons {
        display: none;
      }
      main {
        width: 100%;
      }
      h1 {
        display: none;
      }
    }
    @media only screen and (max-width: 468px) {
      .deletePostButton {
        display: block;
        margin: 1rem 0 0.5rem;
      }
    }
  `}`,
);
