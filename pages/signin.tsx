import {ClientSafeProvider, getCsrfToken, getProviders, getSession, signIn, useSession} from "next-auth/react";
import {NextPageContext} from "next";
import {useState} from "react";
import {Button, Col, Container, Form, Row} from "@govtechsg/sgds-react";
import {Stack} from "react-bootstrap";
import {useRouter} from "next/router";
import Image from "next/image";
import {BRAND_NAME} from "../lib/config";
import Head from "next/head";
import bg_people from '../public/bg_people.png';
import {TopMinimalNavigationBar} from "../components/navigation/TopMinimalNavigationBar";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession({req: context.req});
  if (session) {
    return {redirect: {destination: "/"}}
  } else {
    return {
      props: {
        providers: await getProviders(),
        csrfToken: await getCsrfToken(),
      }
    };
  }
}

interface LoginPage {
  providers: ClientSafeProvider[],
  csrfToken?: string,
}

export default function LoginPage(props: LoginPage) {
  const title = `${BRAND_NAME} - Log In`
  const {data: session} = useSession();
  const {error} = useRouter().query;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function submitLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await signIn("credentials", {
      username: username,
      password: password,
      csrfToken: props.csrfToken,
    });
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title}/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <TopMinimalNavigationBar brandName={BRAND_NAME}/>
      <Container>
        <Row>
          <Col className="p-md-4 p-5">
            <Image layout="responsive" alt="two people discussing a dashboard" src={bg_people}/>
          </Col>
          <Col md={12} lg={4}>
            <Stack gap={3}>
              <h1>
                {BRAND_NAME} Login
              </h1>
              <Form onSubmit={submitLogin} action="#">
                <Stack gap={3}>
                  <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" placeholder="user@example.com" value={username}
                                  onChange={e => setUsername(e.target.value)}/>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password}
                                  onChange={(e) => setPassword(e.target.value)}/>
                  </Form.Group>
                  <Form.Group>
                    <Form.Check type="checkbox" label="Remember me"/>
                  </Form.Group>
                  {error && <p>{error}</p>}
                  <Button variant="primary" type="submit">
                    Sign In
                  </Button>
                  {Object.values(props.providers).map((provider) => {
                    return (
                      <Button key={provider.id} variant="outline-light" onClick={() => signIn(provider.id)}>
                        Sign in with {provider.name}
                      </Button>
                    )
                  })}
                </Stack>
              </Form>
            </Stack>
          </Col>
        </Row>
      </Container>
      <footer></footer>
    </>
  )
}