import styled from 'styled-components';


export const StyledInicio = styled.section`
    max-width: 1200px;
    width: 100%;
    height: 550px;
    margin-top: 100px;
    margin: 0 auto;
    padding: 15px;
    border-top: 2px solid var(--color-gray-1);
    border-bottom: 2px solid var(--color-blue);
    background-image: url('https://www.melhoresdestinos.com.br/wp-content/uploads/2021/04/highway-one-california-estrada-mais-bonita.jpeg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 1;
    position: relative;

    ::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: -1;
    }


    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-top: 170px;
        height: 65%;
    }
    .info{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .links{
        display: flex;
        align-items: center;
        gap: 35px;
        color: white;
        font-size: 25px;
        font-family: Aboreto;
    }
    .itens:hover{
        p:hover{
            text-decoration: underline;
            color: var(--color-blue);
        }
        text-decoration: underline;
        color: var(--color-blue);
    }
    .itens {
        display: flex;
        align-items: center;
    }

    p{
        color: white;
        font-size: 25px;
        font-family: Aboreto;
        margin-bottom: 10px;
        color: var(--color-grey-1);
    }
    h1 {
        font-size: 35px;
        margin-bottom: 10px;
        color: var(--color-grey-1);
    }
    a{
        text-decoration: none;
        color: var(--color-grey-1);
        margin-left: 10px;
    }
    a:hover {
        text-decoration: underline;
    }

    @media (max-width: 800px) {
        .links {
            flex-direction: column;
            gap: 15px;
            font-size: 18px;
        }
        p{
            margin-bottom: 5px;
        }
        h1 {
            margin-bottom: 5px;
        }
        a{
            margin-left: 5px;
        }
    }
    @media (max-width: 400px) {
        h1 {
        font-size: 30px;
    }
    }
`