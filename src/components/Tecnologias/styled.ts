import styled from 'styled-components';


export const StyledTech = styled.section`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 150px 15px;
    background-color: var(--color-grey-3);
    border-bottom: 2px solid var(--color-blue);

    

    .container {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 30px;
        flex-wrap: wrap;
        justify-content: center;
    }
    .card {
        width: 130px;
        height: 140px;
        border-radius: 6px;
        background-color: white;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        box-shadow: 0px 0px 2px 1px var(--color-blue);
    }
    .card:hover {
        box-shadow: 0px 0px 15px 5px var(--color-blue);
    }

    img{
        width: 100px;
        height: 100px;
        border-radius: 6px;
    }

    p{
        color: black;
        font-size: 15px;
        font-family: Aboreto;
        margin-top: 10px;
        text-align: center;
    }

`