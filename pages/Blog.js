import Head from "next/head"
import Link from "next/link"
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Blog = () => {

    return (
        <>
            <Head>
                <title>TouchMyLike | Blog</title>
                <meta name="keywords" content="TouchMyLike" />
                <link rel="icon" href="/image/touchmylike_logo.ico" />
            </Head>
            {/* <div>
                <h1>Blog</h1>
                <Link href="/blogs">
                    <a>See blogs Listing</a>
                </Link>
            </div> */}
            <CardDeck>
                <Card>
                    <CardImg top width="100%" src="/image/256x186.svg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">ชื่อบทความ
                        </CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">ชื่อผู้เขียน</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <CardText>
                            <small className="text-muted">วัน / เดือน / ปี ที่อัพโหลด</small>
                            {/* <small className="text-muted"> <FontAwesomeIcon icon={faHeart} color="red" /></small> */}
                        </CardText>
                        <Button>Tag</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="/image/256x186.svg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="/image/256x186.svg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </CardDeck>

        </>
    )
}
export default Blog