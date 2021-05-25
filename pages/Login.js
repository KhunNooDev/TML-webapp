import Head from "next/head"
import Link from "next/link"
import {
    Form, FormGroup, FormText,
    Col, Input, Label, Button
} from 'reactstrap'

const Login = () => {
    return (
        <>
            <Head>
                <title>TouchMyLike | Login</title>
                <meta name="keywords" content="TouchMyLike" />
                <link rel="icon" href="/image/touchmylike_logo.ico" />
            </Head>
            <center><h2>เข้าสู่ระบบ</h2></center>
            <br />
            <Form>
                <FormGroup row>
                    <Label for="forUsername" xs={4} sm={{ size: 3, offset: 3 }} lg={{ size: 2, offset: 3 }}>ชื่อผู้ใช้งาน</Label>
                    <Col xs={8} sm={4}>
                        <Input type="text" name="username" id="forUsername" placeholder="Your username" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="forPassword" xs={4} sm={{ size: 3, offset: 3 }} lg={{ size: 2, offset: 3 }}>รหัสผ่าน</Label>
                    <Col xs={8} sm={4}>
                        <Input type="password" name="password" id="forPassword" placeholder="Your password" />
                    </Col>
                </FormGroup>

                <FormGroup check row>
                    <Col sm={{ size: 5, offset: 5 }}>
                        <Button>เข้าสู่ระบบ</Button>
                    </Col>
                </FormGroup>
                <br />
                <center>
                    หากยังไม่มีบัญชีผู้ใช้?&nbsp;
                    <Link href="/Register">
                        <a>สมัครสมาชิก</a>
                    </Link>
                </center>
            </Form>
        </>
    )
}

export default Login