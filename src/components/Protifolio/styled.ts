import styled from 'styled-components';


export const StyledPortifolio = styled.section`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 70px 15px;
    background-color: var(--color-grey-3);
    padding-top: 70px;
    padding-bottom: 70px;
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

    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 30px;
    }


    .card {
        width: 300px;
        height: 200px;
        border-radius: 8px;
        box-shadow: rgb(0 0 0 / 20%) 0px 4px 8px;
        display: grid;
        place-items: center;
        position: relative;
        transition: all 1s ease 0s;
        z-index: 1;
        overflow: hidden;
    }

    .card::before{
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background: var(--color-grey-3);
        opacity: 0.3;
        transform: skew(30deg) translateX(85%);
        transition: all 0.6s ease 0s;
        z-index: -1; 
    }  
    .card::after {
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background: var(--color-grey-3);
        opacity: 0.3;
        transform: skew(-30deg) translateX(85%);
        transition: all 0.6s ease 0s;
        z-index: -1;
    }

    img{
        width: 300px;
        height: 200px;
        object-fit: cover;
        border-radius: 8px;
        position: absolute;
        z-index: -2;
    }

    .links {
        display: flex;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
    }
     .links::before{
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background: var(--color-grey-3);
        transform: skew(30deg) translateX(100%);
        opacity: 0.3;
        z-index: -1;
        transition: all 0.6s ease 0s;
     }
     .links::after {
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background: var(--color-grey-3);
        transform: skew(-30deg) translateX(100%);
        box-shadow: rgb(0 0 0 / 70%) 0px 0px 20px;
        opacity: 0.3;
        z-index: -1;
        transition: all 0.6s ease 0s;
     }
     .card:hover{
         a{
            text-decoration: none;
             color: rgb(255, 255, 255);
             font-weight: 700;
             opacity: 100%;
             padding: 5px;
             transition: all 0.6s ease 0s;
             margin-left: 120px;
         }
         a:hover {
            text-decoration: underline;
            color: var(--color-blue);
         }
         p {
             color: rgb(255, 255, 255);
            text-decoration: none;
            margin-left: 120px;
            font-weight: 700;
            font-size: 20px;
            opacity: 100%;
            padding: 5px;
            transition: all 0.6s ease 0s;
         }
     }

     a {
        text-decoration: none;
        margin-left: 150px;
        opacity: 0;
        color: rgb(255, 255, 255);
     }
     p{
        text-decoration: none;
        margin-left: 150px;
        opacity: 0;
        color: rgb(255, 255, 255);
     }

    .card:hover::before {
        transform: skew(30deg) translateX(40%);
        opacity: 0.6;

    }

    .card:hover::after {
        transform: skew(-30deg) translateX(40%);
        opacity: 0.6;
    }

`