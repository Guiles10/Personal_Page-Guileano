import { StyledSobre } from "./styled"

export const Sobre = ({ sobreRef }: any) => {
    
    return(
        <StyledSobre id='sobre' ref={sobreRef}>
            <h1>Sobre Guileano Gadea de Mello</h1>
            <div>
                <p>Olá, meu nome é Guileano e sou um programador web apaixonado por tecnologia e em busca de novos desafios que me permitam aplicar minhas habilidades em projetos significativos. Com experiência tanto em front-end quanto em back-end, estou sempre buscando aprender e me atualizar em relação às últimas tendências tecnológicas para garantir que os projetos que desenvolvo sejam inovadores e eficazes.</p>
                <p>Desde criança, sempre fui uma pessoa responsável e comprometida, características que me ajudaram a ter sucesso em minha carreira acadêmica e profissional. Além disso, cresci em uma família grande, onde aprendi a importância do trabalho em equipe e da colaboração. Acredito que essas habilidades interpessoais são tão importantes quanto minhas habilidades técnicas, e posso aplicá-las para ajudar a criar um ambiente de trabalho colaborativo e produtivo.</p>
                <p>Estou animado com a possibilidade de trabalhar com uma equipe de profissionais talentosos e dedicados, e contribuir para o sucesso de projetos que realmente façam a diferença na vida das pessoas.</p>
            
            </div>
        </StyledSobre>
    )
}

