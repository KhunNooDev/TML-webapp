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
        // <nav>
        //     <div className="logo">
        //         <h1>TouchMyLike</h1>
        //     </div>

        // </nav>
        // <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        //     <Link href='/'><a>
        //         <Navbar.Brand>
        //             <img
        //                 alt=""
        //                 src='../../image/touchmylike_logo.ico'
        //                 width="30"
        //                 height="30"
        //                 className="d-inline-block align-top"
        //             />{' '}
        //         TouchMyLike
        //     </Navbar.Brand>
        //     </a></Link>
        //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //     <Navbar.Collapse id="responsive-navbar-nav">
        //         <Nav className="mr-auto">
        //             <Link href='/'><a>หน้าแรก</a></Link>
        //             <Link href='/Blog'><a>บทความ</a></Link>
        //             <Link href='/About'><a>เกี่ยวกับ</a></Link>
        //         </Nav>
        //         <Nav>
        //             <Link href='/Login'><a>เข้าสู่ระบบ</a></Link>
        //             <Link href='/Register'><a>สมัครสมาชิก</a></Link>
        //         </Nav>
        //     </Navbar.Collapse>
        // </Navbar >
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
                            <NavLink>หน้าแรก</NavLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href='/Blog'>
                            <NavLink>บทความ</NavLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href='/About'>
                            <NavLink>เกี่ยวกับ</NavLink>
                        </Link>
                    </NavItem>
                </Nav>
                <Nav>
                    <NavItem>
                        <Link href='/Login'><NavLink>เข้าสู่ระบบ</NavLink></Link>
                    </NavItem>
                    <NavItem>
                        <Link href='/Register'><NavLink>สมัครสมาชิก</NavLink></Link>
                    </NavItem></Nav>
            </Collapse>
        </Navbar>

    )
}

export default Header