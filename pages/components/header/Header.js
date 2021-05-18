import Link from "next/link"

const Header = () => {
    return (
        <nav>
            <div className="logo">
                <h1>TouchMyLike</h1>
            </div>
            <Link href='/'><a>หน้าแรก</a></Link>
            <Link href='/Blog'><a>บทความ</a></Link>
            <Link href='/About'><a>เกี่ยวกับ</a></Link>
            <Link href='/Login'><a>เข้าสู่ระบบ</a></Link>
            <Link href='/Register'><a>สมัครสมาชิก</a></Link>
        </nav>
    );
}

export default Header;