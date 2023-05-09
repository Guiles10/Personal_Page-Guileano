import { StyledPortifolio } from "./styled"

import Hamburgueria from '../../assets/Hamburgueria 2.0.png'
import KenzieHub from '../../assets/Kenzie Hub.png'
import NuKenzie from '../../assets/Nu Kenzie.png'
import SearchAPI from '../../assets/Search API.png'
import BANDKAMP from '../../assets/bandkamp.png'
import KenzieBuster from '../../assets/Kenzie Buster Diagrama.png'

export const Portifolio = ({ portifolioRef }: any) => {
    
    return(
        <StyledPortifolio id='portifolio' ref={portifolioRef}>
            <h1>Projetos Realizados</h1>
            <div className="container">
                <div className="card">
                    <img src={Hamburgueria} alt="" />
                    <div className="links">
                        <p>Hamburgueria 2.0</p>
                        <a href="https://react-entrega-template-hamburgueria-2-0-guiles10.vercel.app/login" target="_blank" rel="noopener noreferrer">Site</a>
                        <a href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-template-hamburgueria-2.0-guiles10" target="_blank" rel="noopener noreferrer">Git Hub</a>
                    </div>
                </div>
                <div className="card">
                    <img src={KenzieHub} alt="" />
                    <div className="links">
                        <p>Kenzie Hub</p>
                        <a href="http://react-entrega-kenzie-hub-guiles10-akhfmdmfk-guiles10.vercel.app" target="_blank" rel="noopener noreferrer">Site</a>
                        <a href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub-Guiles10" target="_blank" rel="noopener noreferrer">Git Hub</a>
                    </div>
                </div>
                <div className="card">
                    <img src={NuKenzie} alt="" />
                    <div className="links">
                        <p>Nu Kenzie</p>
                        <a href="http://react-entrega-s1-template-nu-kenzie-guiles10-djsswyjmg-guiles10.vercel.app" target="_blank" rel="noopener noreferrer">Site</a>
                        <a href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-template-nu-kenzie-Guiles10" target="_blank" rel="noopener noreferrer">Git Hub</a>
                    </div>
                </div>
                <div className="card">
                    <img src={SearchAPI} alt="" />
                    <div className="links">
                        <p>Search API</p>
                        <a href="http://project-front-end-group06-nicole-blvu1aa4f-guiles10.vercel.app" target="_blank" rel="noopener noreferrer">Site</a>
                        <a href="https://github.com/Grupo06-Nocile/project-front-end-group06-Nicole" target="_blank" rel="noopener noreferrer">Git Hub</a>
                    </div>
                </div>
                <div className="card">
                    <img src={BANDKAMP} alt="" />
                    <div className="links">
                        <p>DB - Band Kamp</p>
                        <a href="https://m5-bandkamp-j8ij.onrender.com/api/docs/swagger/" target="_blank" rel="noopener noreferrer">Doc/Swagger</a>
                        <a href="https://github.com/Guiles10/m5-bandkamp-generic-view-Guiles10" target="_blank" rel="noopener noreferrer">Git Hub</a>
                    </div>
                </div>
                <div className="card">
                    <img src={KenzieBuster} alt="" />
                    <div className="links">
                        <p>KenzieBuster</p>
                        <a href="https://m5-kenzie-buster-guiles10-production.up.railway.app/api/docs/swagger/" target="_blank" rel="noopener noreferrer">Doc/Swagger</a>
                        <a href="https://github.com/Guiles10/m5-kenzie-buster-Guiles10" target="_blank" rel="noopener noreferrer">Git Hub</a>
                    </div>
                </div>
            </div>
        </StyledPortifolio>
    )
};