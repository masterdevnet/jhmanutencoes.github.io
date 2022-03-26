import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>JH Manutenções</title>
                <link rel="stylesheet" href="https://bootswatch.com/5/cosmo/bootstrap.min.css" />
                <script src="https://use.fontawesome.com/a79f02378f.js"></script>
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-23019901-1"></script>
                {/* <script type="text/javascript">
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'UA-23019901-1');
                </script> */}
            </Head>
            <Navbar />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout