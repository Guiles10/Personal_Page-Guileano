import { createGlobalStyle } from "styled-components";


export const StyledGlobal = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    main {
        width: 100%;
        display: flex;
        flex-direction: column;
    align-items: center;
    }

    button{ 
        cursor: pointer;
    }

    #root{ 
        background-color: var(--color-grey-3);
        width: 100%;
        margin: 0 auto;

        display: flex;
        justify-content: center;
    }

    :root {
        --color-primary: #27AE60;
        --color-primary-op: #27AE60;
        --color-secondary: #EB5757;
    
        --color-grey-3: #333333;
        --color-grey-2: #828282;
        --color-grey-1: #E0E0E0;
        --color-grey-0: #F5F5F5;
        --color-blue: rgb(0, 127, 255);

        --color-grey-3-op: rgb(51,51,51, 0.5);
        
        --color-error: #E60000;
        --colot-warning: #FFCD07;
        --colot-sucess: #168821;

        font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    }
    
      @media (max-width: 800px) {
        
    }
`;


