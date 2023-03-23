import { StyledTech } from "./styled"
import HTML from '../../assets/html.png'
import CSS from '../../assets/css.png'
import JS from '../../assets/javaScript.png'
import REACT from '../../assets/React.png'
import NodeJS from '../../assets/node js.png'
import API from '../../assets/rest api.png'
import TS from '../../assets/ts.png'
import VSCode from '../../assets/vs code.png'
import GIT from '../../assets/git.png'
import GitHub from '../../assets/git hub.jpg'
import EXPRESS from '../../assets/express.png'
import PSQL from '../../assets/postegree sql.png'

export const Tecnologias = ({ techRef }: any) => {
    
    return(
        <StyledTech id='tech' ref={techRef}>
            <div className="container">
                <div className="card">
                    <img src={PSQL} alt="" />
                    <p>PostegresSQL</p>
                </div>
                <div className="card">
                    <img src={GitHub} alt="" />
                    <p>Git Hub</p>
                </div>
                <div className="card">
                    <img src={EXPRESS} alt="" />
                    <p>Express JS</p>
                </div>
                <div className="card">
                    <img src={VSCode} alt="" />
                    <p>VSCode</p>
                </div>
                <div className="card">
                    <img src={GIT} alt="" />
                    <p>Git</p>
                </div>
                <div className="card">
                    <img src={HTML} alt="" />
                    <p>HTML 5</p>
                </div>
                <div className="card">
                    <img src={CSS} alt="" />
                    <p>CSS</p>
                </div>
                <div className="card">
                    <img src={JS} alt="" />
                    <p>JavaScript</p>
                </div>
                <div className="card">
                    <img src={REACT} alt="" />
                    <p>React</p>
                </div>
                <div className="card">
                    <img src={NodeJS} alt="" />
                    <p>NodeJS</p>
                </div>
                <div className="card">
                    <img src={API} alt="" />
                    <p>API</p>
                </div>
                <div className="card">
                    <img src={TS} alt="" />
                    <p>TypeScript</p>
                </div>

            </div>
        </StyledTech>
    )
};