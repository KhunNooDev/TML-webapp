import Head from "next/head"
import {
    Form,
    FormGroup,
    Button,
    Label,
    Input
} from 'reactstrap'

const Register = () => {
    return (
        <>
            <Head>
                <title>TouchMyLike | Register</title>
                <meta name="keywords" content="TouchMyLike" />
                <link rel="icon" href="/image/touchmylike_logo.ico" />
            </Head>
            <Form>
                <FormGroup>
                    <Label>ชื่อผู้ใช้งาน</Label>
                    <Input
                        type='text'
                        placeholder='Type your username' />
                </FormGroup>
                <FormGroup>
                    <Label>ชื่อ</Label>
                    <Input
                        type='text'
                        placeholder='Type your name' />
                </FormGroup>
                <FormGroup>
                    <Label>วันเกิด</Label>
                    <Input
                        type='text'
                        placeholder='Type your birthday' />
                </FormGroup>
                <FormGroup>
                    <Label>Email</Label>
                    <Input
                        type='text'
                        placeholder='Type your email' />
                </FormGroup>
                <FormGroup>
                    <Label>รหัสผ่าน</Label>
                    <Input
                        type='text'
                        placeholder='Type your password' />
                </FormGroup>
                <FormGroup>
                    <Label>ยืนยันรหัสผ่าน</Label>
                    <Input
                        type='text'
                        placeholder='Type your confirm password' />
                </FormGroup>
                <FormGroup>
                    <Button color='primary' type='submit'>สมัครสมาชิก</Button>
                </FormGroup>
                {/* <Form>
                    <Form.Group as={Row} controlId="formUsername">
                        <Form.Label column sm={2}>ชื่อผู้ใช้งาน</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Username" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formName">
                        <Form.Label column sm={2}>ชื่อ</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Name" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formName">
                        <Form.Label column sm={2}>วันเกิด</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Name" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formEmail">
                        <Form.Label column sm={2}>E-mail</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPassword">
                        <Form.Label column sm={2}>รหัสผ่าน</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                        <Form.Text id="passwordHelpBlock" muted>
                            Your password must be 8-20 characters long, contain letters and numbers, and
                            must not contain spaces, special characters, or emoji.
  </Form.Text>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formCPassword">
                        <Form.Label column sm={2}>ยืนยันรหัสผ่าน</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="password" placeholder="Comfirm Password" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">สมัครสมาชิก</Button>
                        </Col>
                    </Form.Group>
                </Form> */}
            </Form>
        </>
    )
}

export default Register