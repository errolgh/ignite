import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html {
        &::-webkit-scrollbar {
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
            background: white;
        }
    }

    body {
        font-family: "Montserrat", sans-serif;
        width: 100%
    }
    h2 {
        font-size: 3rem;
        // font-family: "Abril Fatface", cursive;
        // font-weight: lighter;
        color: #333
    }
    h3 {
        font-size: 1.3rem;
        color #333;
        padding: 1.5rem 0rem;
    }
    p{
        line-height: 200%;
        font-size: 1.2rem;
        color: #696969;
    }
    a{
        text-decoration: none;
        color: #333;
    }
    img {
        display: block;
    }
`

export default GlobalStyles