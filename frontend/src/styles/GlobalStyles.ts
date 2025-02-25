import { createGlobalStyle } from "styled-components"; 

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        color: var(--white);
    }
    html, border-style, #root {
        max-height: 100vh;
        max-width: 100vw;

        width: 100%;
        height: 100%;
    } 
    *, button, input {
        border: 0;
        background: none;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, Arial , 'Helvetica Neue', sans-serif
    }
    html {
        background: var(--primary);
    }
    :root{
        --primary: #000;
        --secondary: #15181c;
        --search: #202327;
        --white: #d9d9d9;
        --gray: #7a7a7a;
        --outline: #2f3336;
        --retweet: #00c06b;
        --like: #E8265E;
        --twitter: #33a1f2;
        --twitter-dark-hover: #011017;
        --twitter-light-hover: #2C8ED6;
    }
`;