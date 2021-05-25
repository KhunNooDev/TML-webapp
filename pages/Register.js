import Head from "next/head"
import Link from "next/link"
import {
    Form, FormGroup, FormText,
    Col, Input, Label, Button
} from 'reactstrap'

const Register = () => {
    return (
        <>
            <Head>
                <title>TouchMyLike | Register</title>
                <meta name="keywords" content="TouchMyLike" />
                <link rel="icon" href="/image/touchmylike_logo.ico" />
            </Head>
            <center><h2>สมัครสมาชิก</h2></center>
            <br />
            <Form>
                <FormGroup row>
                    <Label for="forUsername" xs={4} sm={{ size: 3, offset: 3 }} lg={{ size: 2, offset: 3 }}>ชื่อผู้ใช้งาน</Label>
                    <Col xs={8} sm={4}>
                        <Input type="text" name="username" id="forUsername" placeholder="Your username" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="forName" xs={4} sm={{ size: 3, offset: 3 }} lg={{ size: 2, offset: 3 }}>ชื่อ</Label>
                    <Col xs={8} sm={4}>
                        <Input type="text" name="name" id="forName" placeholder="Your name" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="forBirthday" xs={4} sm={{ size: 3, offset: 3 }} lg={{ size: 2, offset: 3 }}>วันเกิด</Label>
                    <Col xs={8} sm={4}>
                        <Input type="date" name="birthday" id="forBirthday" placeholder="Your birthday" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="forEmail" xs={4} sm={{ size: 3, offset: 3 }} lg={{ size: 2, offset: 3 }}>Email</Label>
                    <Col xs={8} sm={4}>
                        <Input type="email" name="email" id="forEmail" placeholder="Your email" />
                        <FormText>Your username is most likely your email.</FormText>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="forPassword" xs={4} sm={{ size: 3, offset: 3 }} lg={{ size: 2, offset: 3 }}>รหัสผ่าน</Label>
                    <Col xs={8} sm={4}>
                        <Input type="password" name="password" id="forPassword" placeholder="Your password" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="forCPassword" xs={4} sm={{ size: 3, offset: 3 }} lg={{ size: 2, offset: 3 }}>ยืนยันรหัสผ่าน</Label>
                    <Col xs={8} sm={4}>
                        <Input type="password" name="password" id="forCPassword" placeholder="Your confirm password" />
                    </Col>
                </FormGroup>

                <FormGroup check row>
                    <Col sm={{ size: 5, offset: 5 }}>
                        <Button>สมัครสมาชิก</Button>
                    </Col>
                </FormGroup>
                <br />
                <center>
                    หากมีบัญชีผู้ใช้เเล้ว?&nbsp;
                    <Link href="/Login">
                        <a>เข้าสู่ระบบ</a>
                    </Link>
                </center>
            </Form>
        </>
    )
}

export default Register