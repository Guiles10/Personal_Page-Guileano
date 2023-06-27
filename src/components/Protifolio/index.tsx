import { StyledPortifolio } from "./styled"

import Hamburgueria from '../../assets/Hamburgueria 2.0.png'
import KenzieHub from '../../assets/Kenzie Hub.png'
import NuKenzie from '../../assets/Nu Kenzie.png'
import SearchAPI from '../../assets/Search API.png'
import BANDKAMP from '../../assets/bandkamp.png'
import KenzieBuster from '../../assets/Kenzie Buster Diagrama.png'
import eCommerce from '../../assets/Diagrama E-commerce.png'
import AccOrganized from '../../assets/AccOrganized Capa.png'
import Pokedex from '../../assets/pokedex.png'

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
                <div className="card">
                    <img src={eCommerce} alt="" />
                    <div className="links">
                        <p>eCommerce</p>
                        <a href="https://github.com/Kenzie-Academy-Brasil-M5-T14-Grupo-42/Api_Django_Ecommerce" target="_blank" rel="noopener noreferrer">Git Hub</a>
                    </div>
                </div>
                <div className="card">
                    <img src={AccOrganized} alt="" />
                    <div className="links">
                        <p>Acc Organized</p>
                        <a href="https://accorganized.vercel.app/login" target="_blank" rel="noopener noreferrer">Site</a>
                        <a href="https://github.com/Guiles10/ProjetoFullStack-Front-End-Guiles10" target="_blank" rel="noopener noreferrer">Git Hub Front</a>
                        <a href="https://github.com/Guiles10/ProjetoFullStack-BackEnd-Guiles" target="_blank" rel="noopener noreferrer">Git Hub Back</a>
                    </div>
                </div>

                <div className="card">
                    <img src={Pokedex} alt="" />
                    <div className="links">
                        <p>Pokedex</p>
                        <a href="https://pokedex-768yf4ix8-guiles.vercel.app/" target="_blank" rel="noopener noreferrer">Site</a>
                        <a href="https://github.com/Guiles10/pokedex_fidelizou.me" target="_blank" rel="noopener noreferrer">Git Hub</a>
                    </div>
                </div>
                
            </div>
        </StyledPortifolio>
    )
};