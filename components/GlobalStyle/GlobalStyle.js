import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --text-color: #111;
        --primary-color: #111;
        --secondary-color: #111;
        --color-gray-100: hsl(225deg, 25%, 95%);
        --color-gray-200: hsl(225deg, 16%, 90%);
        --color-gray-300: hsl(225deg, 8%, 80%);
        --color-gray-400: hsl(225deg, 8%, 70%);
        --color-gray-500: hsl(225deg, 7%, 60%);
        --color-gray-600: hsl(225deg, 15%, 50%);
        --color-gray-700: hsl(225deg, 12%, 40%);
        --color-gray-900: hsl(225deg, 25%, 20%);
        --color-gray-1000: hsl(225deg, 15%, 15%);
        
        --fz-xxs: 0.75rem;
        --fz-xs: 0.8125rem;
        --fz-sm: 0.875rem;
        --fz-md: 1rem;
        --fz-lg: 1.125rem;
        --fz-xl: 1.25rem;
        --fz-xxl: 1.375rem;

        --header-height: 80px;
    }

    html{
        font-size: 18px;
    }

    body{
        margin: 0;
        font-family: 'Noto Sans Arabic', sans-serif;
        color: var(--text-color);
        direction: rtl;
    }

    *,
    *::after,
    *::before{
        box-sizing: border-box;
    }

    img{
        max-width: 100%;
    }

    ul{
        padding: 0;
        margin: 0;
        margin-inline-end: 0;
        list-style: none;
    }
    
    input,
    button,
    textarea,
    select{
        font-family: inherit;
    }

    a{
        color: inherit;
        text-decoration: none;
    }

    button{
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
`;

export default GlobalStyle;