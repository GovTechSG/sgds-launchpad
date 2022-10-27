import type {NextPage} from 'next'
import Head from 'next/head'
import {Button, Col, Container, Row} from "@govtechsg/sgds-react";
import {BRAND_NAME, ORGANISATION_NAME} from "../lib/config";
import {LandingPageLayout} from "../components/layouts/LandingPageLayout";
import withLink from "../components/WithLink";
import Image from "next/image";
import bg_people from "../public/bg_people.png";
import construction from "../public/img_construction.png";
import banner from "../public/homepage-banner.png";
import {ArrowRight, CardChecklist, Compass, People, PersonCheck, QuestionCircle} from "react-bootstrap-icons";
import {Stack} from "react-bootstrap";

const Home: NextPage = () => {
  const title = `${BRAND_NAME}`
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title}/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <LandingPageLayout>
        <div className="has-background-gradient">
          <Container className="p-5">
            <Row className="py-md-5">
              <Col>
                <Stack className="text-center" gap={2}>
                  <h1>{BRAND_NAME}</h1>
                  <h5>Supporting our citizens and businesses for a better Singapore</h5>
                  <Stack className="justify-content-center flex-column flex-md-row" gap={2}>
                    {withLink(<Button variant={"outline-light"}><QuestionCircle/> Find out more</Button>, "/guides")}
                    {withLink(<Button variant={"light"}>How to Collect <ArrowRight/></Button>, "/collection")}
                  </Stack>
                </Stack>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row className="py-5">
            <Col className="p-4 d-flex align-content-end">
              <Stack>
                <Image layout="responsive" alt="two people discussing code and the rendered design" src={banner}/>
              </Stack>
            </Col>
            <Col md={12} lg={8} className="p-4 d-flex align-items-center">
              <Stack>
                <h3>Citizens</h3>
                <p>
                  Doggo ipsum heckin long doggo long water shoob length boy dat tungg tho, borkdrive you are doing me
                  the shock. blep doge puggorino. Doggorino big ol pupper floofs clouds he made many woofs mlem, floofs
                  fluffer clouds big ol pupper, very jealous pupper bork lotsa pats wow such tempt.
                </p>
                <Stack className="flex-column flex-md-row flex-grow-0" gap={2}>
                  {withLink(<Button variant={"outline-primary"}><PersonCheck/> Supporting Citizens</Button>, "/citizens")}
                  {withLink(<Button variant={"primary"}>Collect Now <ArrowRight/></Button>, "/collection")}
                </Stack>
              </Stack>
            </Col>
          </Row>
          <Row className="py-5 flex-row-reverse">
            <Col className="p-4 d-flex align-content-end">
              <Stack>
                <Image layout="responsive" alt="three people working on a webpage under construction"
                       src={construction}/>
              </Stack>
            </Col>
            <Col md={12} lg={8} className="p-4 d-flex align-items-center">
              <Stack className="align-items-end text-end">
                <h3>Businesses</h3>
                <p>
                  Doggo ipsum heckin long doggo long water shoob length boy dat tungg tho, borkdrive you are doing me
                  the shock. blep doge puggorino. Doggorino big ol pupper floofs clouds he made many woofs mlem, floofs
                  fluffer clouds big ol pupper, very jealous pupper bork lotsa pats wow such tempt.
                </p>
                <Stack className="flex-column flex-md-row flex-grow-0 justify-content-end" gap={2}>
                  {withLink(<Button variant={"outline-primary"}><People/> Supporting Businesses</Button>, "/businesses")}
                  {withLink(<Button variant={"primary"}>Collect Now <ArrowRight/></Button>, "/collection")}
                </Stack>
              </Stack>
            </Col>
          </Row>
          <Row className="py-5">
            <Col className="p-4 d-flex align-content-end">
              <Stack>
                <Image layout="responsive" alt="two people discussing a dashboard" src={bg_people}/>
              </Stack>
            </Col>
            <Col md={12} lg={8} className="p-4 d-flex align-items-center">
              <Stack>
                <h3>Guides from {ORGANISATION_NAME} </h3>
                <p>
                  Doggo ipsum heckin long doggo long water shoob length boy dat tungg tho, borkdrive you are doing me
                  the shock. blep doge puggorino. Doggorino big ol pupper floofs clouds he made many woofs mlem, floofs
                  fluffer clouds big ol pupper, very jealous pupper bork lotsa pats wow such tempt.
                </p>
                <Stack className="flex-column flex-md-row flex-grow-0" gap={2}>
                  {withLink(<Button variant={"outline-primary"}><Compass/> More about {ORGANISATION_NAME}</Button>, "/faq")}
                  {withLink(<Button variant={"primary"}>Guides and Case Studies <ArrowRight/></Button>, "/guides")}
                </Stack>
              </Stack>
            </Col>
          </Row>
        </Container>
      </LandingPageLayout>
      <footer></footer>
    </>
  )
}

export default Home
