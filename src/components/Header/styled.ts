import styled from "styled-components";


export const StyledHeader = styled.section`
    max-width: 1200px;
    width: 102%;
    margin: 0 auto;
    height: 80px;
    padding: 15px;
    background-color: var(--color-grey-3);
    border-bottom: 2px solid var(--color-blue);
    z-index: 10;

    display: flex;
    -webkit-box-pack: center;
    justify-content: space-between;
    align-items: center;
    position: fixed;

    .logo{
        color: var(--color-grey-0);
        width: 28%;
    }

    .navDesktop {
        width: 50%;
    }

    .navDesktop > ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .navDesktop > ul > li {
        display: flex;
    }

    .navDesktop > ul > li > a {
        font-size: 14px;
        width: 100px;
        color: var(--color-grey-0);
        text-decoration: none;
        background-color: var(--color-grey-3);
        border: none;
        scroll-behavior: smooth;
    }
    .navDesktop > ul > li > a:hover{
        font-size: 16px;
        text-decoration: underline;
        color: var(--color-blue);
        padding: 5px;
        border-radius: 5px;
    }

    .navMobile {
        display: none;
    }
    .divButton{
        display: none;
    }

    @media (max-width: 800px) {
        padding: 15px 25px;

        .navDesktop {
            display: none;
        }
        .divButton{
            font-size: 40px;
            color: white;
            display: flex;
            justify-content: flex-end;
            z-index: 99;
        }
        .logo{
            color: var(--color-grey-0);
            width: 207px;
        }
        .navMobile {
            padding: 25px;
            padding-top: 75px;
            display: flex;
            position: absolute;
            right: 26px;
            top: 9px;
            border-radius: 8px;
            background-color: var(--color-grey-2);
        }
        .navMobile > ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            gap: 35px;
        }
        .navMobile > ul > li {
            display: flex;

        }
        .navMobile > ul > li > a {
            font-size: 18px;
            width: 100px;
            color: var(--color-grey-0);
            text-decoration: none;
            background-color: var(--color-grey-2);
            border: none;
            scroll-behavior: smooth;
        }
        .navMobile > ul > li > a:hover{
            font-size: 18px;
            text-decoration: underline;
            color: var(--color-blue);
            border-radius: 5px;
        }
    }
    @media (max-width: 500px) {
        padding: 15px 20px;

        .navMobile {
            padding: 25px;
            padding-top: 75px;
            display: flex;
            position: absolute;
            right: 12px;
            top: 9px;
            border-radius: 8px;
            background-color: var(--color-grey-2);
        }
    }
`