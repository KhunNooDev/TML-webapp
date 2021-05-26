import React, { useState } from 'react'
import Link from "next/link"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">
                <img
                    alt="tml_logo"
                    src='../../image/touchmylike_logo.ico'
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
               TouchMyLike
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className='mr-auto' navbar>
                    <NavItem>
                        <Link href='/'>
                            <NavLink className='header'>หน้าแรก</NavLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href='/Blog'>
                            <NavLink className='header'>บทความ</NavLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href='/About'>
                            <NavLink className='header'>เกี่ยวกับ</NavLink>
                        </Link>
                    </NavItem>
                </Nav>
                <Nav>
                    <NavItem>
                        <Link href='/Schedule'><NavLink>ปฏิทินของฉัน</NavLink></Link>
                    </NavItem>
                    <NavItem>
                        <Link href='/Dashboard'><NavLink>เเผงควบคุม</NavLink></Link>
                    </NavItem>
                    <NavItem>
                        <Link href='/Login'><NavLink>เข้าสู่ระบบ</NavLink></Link>
                    </NavItem>
                    <NavItem>
                        <Link href='/Register'><NavLink>สมัครสมาชิก</NavLink></Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>

    )
}

export default Header