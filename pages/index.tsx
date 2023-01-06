import type { NextPage } from "next";
import Head from "next/head";
import {
  Button,
  Col,
  Container,
  Row,
  Card,
  Breadcrumb,
  Badge,
} from "@govtechsg/sgds-react";
import { BRAND_NAME, ORGANISATION_NAME } from "../lib/config";
import { LandingPageLayout } from "../components/layouts/LandingPageLayout";
import Image from "next/image";
import herobanner from "../public/hero_banner.png";
import block1pic from "../public/block1_pic.png";
import block4pic from "../public/block4_pic.png";
import leftwing from "../public/left-wing.png";
import rightwing from "../public/right-wing.png";
import image1 from "../public/image-1.png";
import image2 from "../public/image-2.png";
import image3 from "../public/image-3.png";
import image4 from "../public/image-4.png";
import image5 from "../public/image-5.png";
// import image_sect1 from "../public/image-sect1.png";
import { Stack } from "react-bootstrap";
import { DetailPageLayout } from "../components/layouts/DetailPageLayout";
import { NavItem } from "../components/navigation/SideSecondaryNavigationBar";

const sideNavItems: NavItem[] = [
  {
    eventKey: "menuitem1",
    content: "Menu item 1",
    subItems: [
      {
        eventKey: "menusubitem1.1",
        href: "#businesses",
        content: "Menu sub item 1.1",
      },
      {
        eventKey: "menusubitem1.2",
        href: "#menusubitem1.2",
        content: "Menu sub item 1.2",
      },
    ],
  },
  {
    eventKey: "menuitem2",
    content: "Menu item 2",
    subItems: [
      {
        eventKey: "menusubitem2.1",
        href: "#menusubitem2.1",
        content: "Menu sub item 2.1",
      },
      {
        eventKey: "menusubitem2.2",
        href: "#menusubitem2.2",
        content: "Menu sub item 2.2",
      },
    ],
  },
  {
    eventKey: "menuitem3",
    content: "Menu item 3",
    subItems: [
      {
        eventKey: "menusubitem3.1",
        href: "#menusubitem3.1",
        content: "Menu sub item 3.1",
      },
      {
        eventKey: "menusubitem3.2",
        href: "#menusubitem3.2",
        content: "Menu sub item 3.2",
      },
    ],
  },
  {
    eventKey: "menuitem4",
    content: "Menu item 4",
    subItems: [
      {
        eventKey: "menusubitem4.1",
        href: "#menusubitem4.1",
        content: "Menu sub item 4.1",
      },
      {
        eventKey: "menusubitem4.2",
        href: "#menusubitem4.2",
        content: "Menu sub item 4.2",
      },
    ],
  },
  {
    eventKey: "menuitem5",
    content: "Menu item 5",
  },
];

const Home: NextPage = () => {
  const title = `${BRAND_NAME}`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={title} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <DetailPageLayout
        meta={{ title: "Detail Page" }}
        sideNavigationMenu={sideNavItems}
      >
        <Container>
          <Row className='py-5 d-flex align-items-center'>
            <Breadcrumb>
              <Breadcrumb.Item href='https://www.designsystem.tech.gov.sg/'>
                HOME
              </Breadcrumb.Item>
              <Breadcrumb.Item href='https://github.com/GovTechSG/@govtechsg/sgds-react/'>
                STEP 1
              </Breadcrumb.Item>
              <Breadcrumb.Item href='https://github.com/GovTechSG/@govtechsg/sgds-react/'>
                STEP 2
              </Breadcrumb.Item>
              <Breadcrumb.Item active>STEP 3</Breadcrumb.Item>
            </Breadcrumb>
          </Row>
        </Container>
        <Container>
          <Row className='py-5 d-flex align-items-center'>
            <h1>Page title</h1>
            <p>Page description goes here</p>

            <h2>Section header 1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              reiciendis nulla corrupti voluptatem modi debitis obcaecati ea
              totam quo earum. Alias dolor nemo voluptatibus deleniti nesciunt
              animi, sapiente unde ducimus atque, facilis earum eius quo rerum,
              officiis aliquid eos culpa!
            </p>
            <Image alt='random picture' src={image5} />
          </Row>
          <Row className='py-md-5'>
            <h2>Section header 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              reiciendis nulla corrupti voluptatem modi debitis obcaecati ea
              totam quo earum. Alias dolor nemo voluptatibus deleniti nesciunt
              animi, sapiente unde ducimus atque, facilis earum eius quo rerum,
              officiis aliquid eos culpa!
            </p>
            <Col>
              <Row>
                <Col md={3} xs={12} className='pb-3'>
                  <Card>
                    <Card.Img
                      alt='img alternate text goes here'
                      src={image1.src}
                      variant='top'
                    />
                    <Card.Body>
                      <Card.Title>Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card&apos;s content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} xs={12} className='pb-3'>
                  <Card>
                    <Card.Img
                      alt='img alternate text goes here'
                      src={image2.src}
                      variant='top'
                    />
                    <Card.Body>
                      <Card.Title>Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card&apos;s content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} xs={12} className='pb-3'>
                  <Card>
                    <Card.Img
                      alt='img alternate text goes here'
                      src={image3.src}
                      variant='top'
                    />
                    <Card.Body>
                      <Card.Title>Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card&apos;s content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} xs={12} className='pb-3'>
                  <Card>
                    <Card.Img
                      alt='img alternate text goes here'
                      src={image4.src}
                      variant='top'
                    ></Card.Img>
                    <Card.Body>
                      <Card.Title>Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card&apos;s content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>

          <h2>Section header 3</h2>
          <h3>Sub section header</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            reiciendis nulla corrupti voluptatem modi debitis obcaecati ea totam
            quo earum. Alias dolor nemo voluptatibus deleniti nesciunt animi,
            sapiente unde ducimus atque, facilis earum eius quo rerum, officiis
            aliquid eos culpa!
          </p>
          <Col>
            <Row>
              <Col md={4} xs={12} className='pb-3'>
                <Card>
                  <Card.Body>
                    <div className='d-flex align-items-center'>
                      <Card.Title>Title</Card.Title>
                      <Badge bg='success' className='ms-auto'>
                        Tag
                      </Badge>
                    </div>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </Card.Text>
                    <Card.Link href='#'>Go somewhere</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} xs={12} className='pb-3'>
                <Card>
                  <Card.Body>
                    <div className='d-flex align-items-center'>
                      <Card.Title>Title</Card.Title>
                      <Badge bg='success' className='ms-auto'>
                        Tag
                      </Badge>
                    </div>

                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </Card.Text>
                    <Card.Link href='#'>Go somewhere</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} xs={12} className='pb-3'>
                <Card>
                  <Card.Body>
                    <div className='d-flex align-items-center'>
                      <Card.Title>Title</Card.Title>
                      <Badge bg='success' className='ms-auto'>
                        Tag
                      </Badge>
                    </div>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </Card.Text>
                    <Card.Link href='#'>Go somewhere</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Container>
      </DetailPageLayout>
    </>
  );
};

export default Home;
