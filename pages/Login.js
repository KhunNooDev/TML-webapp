import { useState, useEffect } from 'react'
import { signin, authenticate, isAuth } from '../actions/auth'
import Router from 'next/router'
import Head from "next/head"
import Link from "next/link"
import {
    Form, FormGroup, FormText,
    Col, Input, Label, Button
} from 'reactstrap'

const Login = () => {

    const [values, setValues] = useState({
        username: '',
        password: '',
    })

    const { username, password } = values

    const handleSubmit = e => {
        e.preventDefault()
        setValues({ ...values })
        const user = { username, password }
        signin(user).then(data => {
            if(data.error) {
                console.log('Error signup')
            } else {
                authenticate(data, () => {
                    if(isAuth()) {
                        Router.push('/')
                        console.log('Pass')
                    } else {
                        console.log('Error')
                    }
                })
            }
        })
    }

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value })
    }
    return (
        <>
            <Head>
                <title>TouchMyLike | Login</title>
                <meta name="keywords" content="TouchMyLike" />
                <link rel="icon" href="/image/touchmylike_logo.ico" />
            </Head>
            <center><h2>เข้าสู่ระบบ</h2></center>
            <br />
            <Form onSubmit={handleSubmit}>
                <FormGroup row>
                    <Label for="forUsername" xs={4} sm={{ size: 3, offset: 3 }} lg={{ size: 2, offset: 3 }}>ชื่อผู้ใช้งาน</Label>
                    <Col xs={8} sm={4}>
                        <Input
                            value={username}
                            onChange={handleChange('username')}
                            type="text"
                            name="username"
                            id="forUsername"
                            placeholder="Your username" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="forPassword" xs={4} sm={{ size: 3, offset: 3 }} lg={{ size: 2, offset: 3 }}>รหัสผ่าน</Label>
                    <Col xs={8} sm={4}>
                        <Input
                            value={password}
                            onChange={handleChange('password')}
                            type="password"
                            name="password"
                            id="forPassword"
                            placeholder="Your password" />
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