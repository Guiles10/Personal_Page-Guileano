import styled from 'styled-components';


export const StyledExp = styled.section`
    max-width: 1200px;
    width: 100%;
    padding: 100px 15px;
    background-color: var(--color-grey-3);
    border-bottom: 2px solid var(--color-blue);

    h1{
        color: var(--color-blue);
        text-decoration: underline;
        font-size: 25px;
        line-height: 25px;
        font-weight: 500;
        font-family: Aboreto;
        margin-bottom: 50px;
    }

    .DivKenzie {
        margin-top: 40px;
    }
    .DivArion {
        margin-top: 40px;
    }
    h2 {
        color: var(--color-blue);
        font-size: 25px;
        line-height: 25px;
        font-weight: 700;
        font-family: Aboreto;
        margin-bottom: 20px;
        text-align: justify;
            small{
                color: white;
                font-size: 15px;
                line-height: 20px;
                font-weight: 400;
                font-family: Aboreto;
                text-align: justify;
                letter-spacing: 2px;
            }
    }
    h3{
        color: white;
        font-size: 20px;
        line-height: 25px;
        font-weight: 700;
        font-family: Aboreto;
        text-align: justify;
        letter-spacing: 2px;
        margin-left: 20px;
        margin-top: 15px;
        margin-bottom: 15px;
    }
    .pComp{
        margin-top: 20px;
        
    }
    p{
        color: white;
        font-size: 18px;
        line-height: 25px;
        font-weight: 400;
        font-family: Aboreto;
        margin-bottom: 5px;
        text-align: justify;
        margin-left: 20px;
            .smallComp{
                color: var(--color-grey-1);
                font-size: 20px;
                line-height: 25px;
                font-weight: 700;
                font-family: Aboreto;
            }
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