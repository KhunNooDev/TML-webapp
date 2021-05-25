import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/globals.css'
import Layout from './components/Layout'
import { Container } from 'reactstrap'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Container>
        {/* <br /> */}
        <Component {...pageProps} />
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossOrigin="anonymous"
        />
        <script
          src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin="anonymous">
        </script>
        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossOrigin="anonymous">
        </script>
        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin="anonymous">
        </script> */}
      </Container>
    </Layout>

  )

}

export default MyApp
