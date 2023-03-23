import { StyledHeader } from './styled'
import { AiOutlineAlignLeft } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'


export const Header = ({ handleClick, inicioRef, sobreRef, techRef, portifolioRef }: any)  => {

    const [active, setActive] = useState(false)

    const ToggleMenu = () => { 
        setActive (!active)
    }

    return(
        <StyledHeader >
            <div className='logo'>
                <h1>{'<Personal Page />'}</h1> 
            </div>

            <div className='navDesktop'>
                <ul className={active ? "menu-sanduiche" : "menu-principal"}>
                   <li className='navIten'><a href='#inicio' onClick={() => handleClick(inicioRef)}>Inicio</a></li>
                   <li className='navIten'><a href='#sobre' onClick={() => handleClick(sobreRef)}>Sobre Mim</a></li>
                   <li className='navIten'><a href='#tech' onClick={() => handleClick(techRef)}>Hard Skills</a></li>
                   <li className='navIten'><a href='#portifolio' onClick={() => handleClick(portifolioRef)} >Portfolio</a></li>
                </ul> 
            </div>

            <div className="divButton">
                {active ? <AiOutlineClose onClick={ToggleMenu}/> : <AiOutlineAlignLeft onClick={ToggleMenu}/> }
            </div>

            {active ?
                <div className="navMobile">
                    <ul>
                        <li className='navIten'><a href='#inicio'>Inicio</a></li>
                        <li className='navIten'><a href='#sobre'>Sobre Mim</a></li>
                        <li className='navIten'><a href='#tech'>Hard Skills</a></li>
                        <li className='navIten'><a href='#portifolio'>Portfolio</a></li>
                    </ul> 
                </div>
            :
            null}
        </StyledHeader>

    )

    
}