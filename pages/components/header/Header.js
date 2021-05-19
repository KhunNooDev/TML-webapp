import Link from "next/link"
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        // <nav>
        //     <div className="logo">
        //         <h1>TouchMyLike</h1>
        //     </div>

        // </nav>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Link href='/'><a>
                <Navbar.Brand>
                    <img
                        alt=""
                        src='../../image/touchmylike_logo.ico'
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                TouchMyLike
            </Navbar.Brand>
            </a></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link href='/'><a>หน้าแรก</a></Link>
                    <Link href='/Blog'><a>บทความ</a></Link>
                    <Link href='/About'><a>เกี่ยวกับ</a></Link>
                </Nav>
                <Nav>
                    <Link href='/Login'><a>เข้าสู่ระบบ</a></Link>
                    <Link href='/Register'><a>สมัครสมาชิก</a></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >

    );
}

export default Header;