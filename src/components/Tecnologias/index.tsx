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
import PYTHON from '../../assets/python.png'
import DJANGO from '../../assets/django.jpg'
import cicd from '../../assets/cicd.svg'
import next from '../../assets/nextJS.png'
import scrum from '../../assets/scrum.webp'
import Nest from '../../assets/nestjs.png'
import vuejs from '../../assets/vuejs.png'

export const Tecnologias = ({ techRef }: any) => {
    
    return(
        <StyledTech id='tech' ref={techRef}>
            <h1>Hard Skills</h1>
            <div className="container">
                <div className="card">
                    <img src={VSCode} alt="" />
                    <p>VSCode</p>
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
                    <img src={GIT} alt="" />
                    <p>Git</p>
                </div>

                <div className="card">
                    <img src={GitHub} alt="" />
                    <p>Git Hub</p>
                </div>

                <div className="card">
                    <img src={scrum} alt="" />
                    <p>Scrum</p>
                </div>

                <div className="card">
                    <img src={NodeJS} alt="" />
                    <p>NodeJS</p>
                </div>

                <div className="card">
                    <img src={next} alt="" />
                    <p>NextJs</p>
                </div>

                <div className="card">
                    <img src={Nest} alt="" />
                    <p>NestJs</p>
                </div>

                <div className="card">
                    <img src={cicd} alt="" />
                    <p>CI/CD</p>
                </div>

                <div className="card">
                    <img src={REACT} alt="" />
                    <p>React</p>
                </div>

                <div className="card">
                    <img src={TS} alt="" />
                    <p>TypeScript</p>
                </div>

                <div className="card">
                    <img src={API} alt="" />
                    <p>API</p>
                </div>

                <div className="card">
                    <img src={PSQL} alt="" />
                    <p>PostegresSQL</p>
                </div>

                <div className="card">
                    <img src={EXPRESS} alt="" />
                    <p>Express JS</p>
                </div>

                <div className="card">
                    <img src={PYTHON} alt="" />
                    <p>Python</p>
                </div>

                <div className="card">
                    <img src={DJANGO} alt="" />
                    <p>Django</p>
                </div>

                <div className="card">
                    <img src={vuejs} alt="" />
                    <p>Vue.JS</p>
                </div>

            </div>
        </StyledTech>
    )
};