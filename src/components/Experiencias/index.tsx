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

