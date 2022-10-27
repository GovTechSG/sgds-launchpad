import type {NextPage} from 'next'
import Head from 'next/head'
import {BRAND_NAME} from "../lib/config";
import {WidePageLayout} from "../components/layouts/WidePageLayout";
import {Button, Card, Col, Container, Row} from "@govtechsg/sgds-react";
import Image from "next/image";
import Link from "next/link";
import {CardChecklist, Envelope, ListCheck, Lock, LockFill} from "react-bootstrap-icons";

import writing1 from "../public/img_writing1.png";
import design1 from "../public/img_design1.png";
import developer1 from "../public/img_developer1.png";

const PricingPage: NextPage = () => {
  const title = `${BRAND_NAME} - Collection`
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title}/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <WidePageLayout meta={{title: "Collection"}}>
        <Container className="py-5">
          <h1>I am...</h1>
          <Row>
            <Col xs="12" lg="4" className="p-2 p-lg-4">
              <Card>
                <Image className="card-img-top" src={writing1} alt="stock image of writing"/>
                <Card.Body>
                  <Card.Title>Collecting for Someone Else</Card.Title>
                  <Card.Text>
                    Assisting somebody is a kind and impactful way to help.
                    You&apos;ll need their phone, both SingPass accounts, and about ten minutes of time.
                  </Card.Text>
                  <Button variant="outline-primary"><CardChecklist/> Things to Prepare</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="12" lg="4" className="p-2 p-lg-2">
              <Card>
                <Image className="card-img-top" src={developer1} alt="stock image of development"/>
                <Card.Body>
                  <Card.Title>Collecting for Myself</Card.Title>
                  <Card.Text>
                    It just takes a few minutes to get what you need from {BRAND_NAME}.
                    After filling in this short form, sign in with SingPass.
                  </Card.Text>
                  <Link href="/wizard" passHref><Button variant="primary">Get Started with SingPass <ListCheck/></Button></Link>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="12" lg="4" className="p-2 p-lg-4">
              <Card>
                <Image className="card-img-top" src={design1} alt="stock image of design"/>
                <Card.Body>
                  <Card.Title>Collecting for a Business</Card.Title>
                  <Card.Text>{BRAND_NAME} supports businesses by providing incentives and relief to continue growing the
                    economy.</Card.Text>
                  <Button variant="outline-primary"><Lock/> Sign in with CorpPass</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container className="py-5">
          <Row>
            <Col className="text-center">
              <h1>Need any help?</h1>
              <p>
                Send us an email and we&apos;ll get back to you as soon as we can.
              </p>
              <Button variant="outline-primary"><Envelope/> Get in touch</Button>
            </Col>
          </Row>
        </Container>
      </WidePageLayout>
      <footer></footer>
    </>
  )
}

export default PricingPage
