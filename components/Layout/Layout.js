import styled from "styled-components";
import Head from "next/head";
import Header from "components/Header";

function Layout({ children }){
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </Head>

            <Header />

            <Main>{children}</Main>

            <div style={{height: "1500px"}}></div>
        </>
    )
}

const Main = styled.main`
    padding-top: var(--header-height)px;
`;

export default Layout