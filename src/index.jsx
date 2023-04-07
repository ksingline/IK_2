import './style.css'
import { Canvas } from '@react-three/fiber'
import ReactDOM from 'react-dom/client'
import React, { useState } from 'react'
import App from './App.jsx'
import CustomCamera from './CustomCamera'
import { DropdownMenu, NavigationBar, NavItem } from './NavigationBar'
import { ReactComponent as MessengerIcon } from './icons/default_robot.svg'
import { ReactComponent as CogIcon } from './icons/cog.svg'
import { ReactComponent as BoltIcon } from './icons/bolt.svg'



const root = ReactDOM.createRoot(document.querySelector('#root'))


root.render(
    <>
        <NavigationBar>
            <NavItem icon={<MessengerIcon />}>
                <DropdownMenu />
            </NavItem>
            <NavItem icon={<BoltIcon/>}/>
            <NavItem icon={<CogIcon/>}>

                {/* drop down goes here */}
                

            </NavItem>
        </NavigationBar>

        <Canvas>
            <CustomCamera />
            <App />
        </Canvas>

    </>
)