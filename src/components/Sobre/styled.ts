import styled from 'styled-components';


export const StyledSobre = styled.section`
    max-width: 1200px;
    width: 100%;
    padding: 70px 15px;
    background-color: var(--color-grey-3);
    border-bottom: 2px solid var(--color-blue);
    padding-top: 100px;
    margin: 0 auto;

    
    h1{
        color: var(--color-blue);
        text-decoration: underline;
        font-size: 25px;
        line-height: 25px;
        font-weight: 500;
        font-family: Aboreto;
    }

    div {
        padding: 50px;
    }

    p{
        color: white;
        font-size: 22px;
        line-height: 35px;
        font-weight: 400;
        font-family: Aboreto;
        margin-bottom: 20px;
        text-align: justify;

    }
    a {
        color: rgb(0, 127, 255);
        text-decoration: none;
    }

    @media (max-width: 800px) {
        div {
            padding: 15px;
        }
        
    }

`