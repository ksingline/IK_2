import React, { useState, useEffect, useRef } from "react";
import './NavigationBar.css'
import { ReactComponent as RobotIcon } from './icons/default_robot.svg'
import { ReactComponent as ArrowIcon } from './icons/arrow.svg'
import { ReactComponent as CogIcon } from './icons/cog.svg'
import { CSSTransition } from 'react-transition-group'

export const DropdownMenu = () => {

    const [activeMenu, setActiveMenu] = useState('main')
    const [menuHeight, setMenuHeight] = useState(null)
    const dropdownRef = useRef(null)

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height)
    }

    function DropdownItem(props) {
        return (
            <a href="#"
                className="menu-item"
                onClick={() => {
                    props.goToMenu && setActiveMenu(props.goToMenu)
                    props.onClick && props.onClick()
                    props.onMenuItemClick && props.onMenuItemClick()
                    props.onClose && props.onClose()
                }}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        )
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
            <CSSTransition
                in={activeMenu === 'main'}
                unmountOnExit={true}
                timeout={500}
                classNames="menu-primary"
                onEnter={calcHeight}
            >
                <div className="menu">

                    <DropdownItem
                        leftIcon={<RobotIcon />}
                        goToMenu="robots"
                    >
                        Robots
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={<CogIcon />}
                        goToMenu="settings"
                    >
                        Settings
                    </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'robots'}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary"
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem leftIcon={<ArrowIcon />} goToMenu="main" />
                    <DropdownItem
                        leftIcon={<RobotIcon />}
                        onMenuItemClick={() => {
                            console.log('clicked')
                        }}

                    >
                        Iontec KR 50 R 2500
                    </DropdownItem>
                    <DropdownItem>Robot</DropdownItem>

                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'settings'}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary"
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem leftIcon={<ArrowIcon />} goToMenu="main" />
                    <DropdownItem>Settings</DropdownItem>
                    <DropdownItem>Settings</DropdownItem>
                    <DropdownItem>Settings</DropdownItem>
                    <DropdownItem>Settings</DropdownItem>
                    <DropdownItem>Settings</DropdownItem>
                </div>
            </CSSTransition>

        </div>
    )

}

export const NavigationBar = (props) => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">{props.children}</ul>

        </nav>
    )
}

export const NavItem = (props) => {

    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>

    )
}


