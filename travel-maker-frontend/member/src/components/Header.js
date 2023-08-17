import React from 'react'
import headstyle from './usecomponents.module.css'


export default function Header() {

   
    return (
        
        <div>  
            <header>
                <img id="logo" src="../plane_airplane_icon.png" ></img>
                <nav className={headstyle.headstyle}>
                    <ul>
                        <h3><a className="" onClick={''}>여행 계획하기</a></h3>
                        <li><a href="#"><img src="../person.png"></img></a></li>
                        <li><label for="icon" href="#"><img src="../menubar.png"></img></label></li>
                    </ul>    
                </nav>
            </header>  
        </div>    
    )
};
    			