import { StyledExp } from "./styled"


export const Experiencia = ({ expRef }: any) => {
    
    return(
        <StyledExp id='experiencia' ref={expRef}>
            <h1>Experiencias Profisionais</h1>
            <div>
                <div className="DivMonitor">
                    <h2>Kenzie Academy Brasil <small> | janeiro/2023 – abril/2023 |</small></h2>
                    <h3>Monitor de Ensino </h3>
                    <p>- Fornecendo suporte aos alunos do módulo de Front End;</p>
                    <p>- Sanar dúvidas e oferecer feedback construtivo aos alunos;</p>
                    <p>- Corrigir trabalhos/projetos e fornecer relatórios sobre o desempenho dos alunos;</p>
                    <p>- Trabalhar em equipe para encontrar soluções criativas e eficazes para bugs em diversas tecnologias;</p>
                    <p className="pComp"><small className="smallComp">Competências:</small> Git | GitHub | React | Typescript | JavaScript | CSS | Insomnia | API's</p>
                </div>  

                {/* <div className="DivKenzie">
                    <h2>Kenzie Academy Brasil <small>| junho/2022 - junho/2023 |</small></h2>
                    <h3>Simulação de uma empreza real</h3>
                    <p>Durante o período de estudos na Kenzie, a metodologia de ensino é simula um ambiente de trabalho em uma empresa, separada por Sprints de 7 dias, onde tinha prazo para entrega de projetos, sendo avaliado qualidade, eficiência, boas práticas, lógica de programação, código legível...
Praticamos também a interação com colegas e instrutores, tanto em trabalhos em equipe como consulta para resolver bugs e pensar em soluções eficientes e práticas, praticando habilidades comportamentais como liderança, comunicação, trabalho em equipe.
</p>
                    <p className="pComp"><small className="smallComp">Competências:</small> HTML | CSS| React | Typescript | JavaScript | NodeJs | Git | GitHub | Insomnia | PostegreSQL | RestAPI | Express | Python | Django</p>
                </div>    */}

                <div className="DivArion">
                    <h2>Produtora Arion <small>| março/2019 - janeiro/2023 |</small></h2>
                    <h3>Produtor e Estrategista Digital</h3>
                    <p>Como parte da equipe de uma empresa especializada em marketing digital, tenho a responsabilidade de liderar as estratégias para criação, edição, produção e venda de conteúdo, cursos e produtos online. Minha experiência inclui:</p>
                    <p>- Trabalhar em colaboração com empresas de diferentes ramos para criar conteúdo online;</p>
                    <p>- Liderar a criação de conteúdo online e a edição de vídeos para redes sociais;</p>
                    <p>- Atuar como coprodutor em lançamentos online;</p>
                    <p className="pComp"><small className="smallComp">Competências:</small> Adobe Premier | OBS Studio | Microsoft Office | Google Ads | Facebook Business</p>
                </div>               
            </div>
        </StyledExp>
    )
}

