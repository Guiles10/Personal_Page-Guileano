import { StyledInicio } from './styled'
import { ImLinkedin } from 'react-icons/im';
import { BsGithub } from 'react-icons/bs';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { AiOutlineFileText } from 'react-icons/ai';

export const Inicio = ({ inicioRef }: any) => {
    
    return(
        <StyledInicio id='inicio' ref={inicioRef}>
            <div className='container'>
                <div className='info'>
                    <p>{' `${ Olá, me chamo '}</p>
                    <h1>{'Guileano Mello }` '}</h1>
                    <p>| Desenvolvedor FrotnEnd |</p>
                </div>
                <div className='links'>
                    <div className='itens'>
                        <ImLinkedin />
                        <a target="_blank" href='https://www.linkedin.com/in/guileano-mello/'> Linkdin</a>
                    </div>
                    <div className='itens'>
                        <BsGithub />
                        <a target="_blank" href='https://github.com/Guiles10'>GitHub</a>
                    </div>
                    <div className='itens'>
                        <AiOutlineFileText />
                        <a target="_blank" href='https://drive.google.com/file/d/1Nc9YInHWMmwzXHDbclQFo2IzvxbGj5BR/view?usp=share_link'>Currículo</a>
                    </div>
                    <div className='itens'>
                        <HiOutlineMailOpen />
                        <a>guiles.mello@gmail.com</a>
                    </div>
                </div>
            </div>
        </StyledInicio>
    )
}