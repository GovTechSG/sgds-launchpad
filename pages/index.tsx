import type { NextPage } from "next";
import Head from "next/head";
import { Button, Col, Container, Row, Card } from "@govtechsg/sgds-react";
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
import { Stack } from "react-bootstrap";

const Home: NextPage = () => {
  const title = `${BRAND_NAME}`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={title} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <LandingPageLayout>
        <Container>
          <Row className='py-5 d-flex align-items-center'>
            <Col className='d-block d-md-none'>
              <Image
                alt='3 people discussing rendered design'
                src={herobanner}
              />
            </Col>
            <Col md={12} lg={6} className='px-1'>
              <h3>
                Header.<br></br>Header. Header.
              </h3>
              <p>
                Additional intro copy to introduce the page and lead users into
                the content.
              </p>
              <div className='d-grid d-md-block'>
                <Button>Call-to-action</Button>
              </div>
            </Col>
            <Col className='d-none d-md-block'>
              <Image
                alt='3 people discussing rendered design'
                src={herobanner}
              />
            </Col>
          </Row>
        </Container>
        <div className='d-block d-md-none bg-purple-200'>
          <Container>
            <Row className='py-md-5'>
              <Col>
                <Stack className='text-center'>
                  <h1>TITLE.</h1>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia.
                  </p>
                </Stack>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row className='py-5 d-flex align-items-center'>
            <Col>
              <Image alt='a person within a phone display' src={block1pic} />
            </Col>
            <Col md={12} lg={6}>
              <p className='position-relative'>
                <span id='leftwing' className='d-none d-md-block'>
                  <Image alt='left wing' src={leftwing} />
                </span>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source.
                <span id='rightwing' className='d-none d-md-block'>
                  <Image alt='right wing' src={rightwing} />
                </span>
              </p>
            </Col>
          </Row>
        </Container>
        <div className='d-none d-md-block bg-purple-200'>
          <Container>
            <Row className='py-md-5'>
              <Col>
                <Stack className='text-center'>
                  <h1>TITLE.</h1>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia.
                  </p>
                </Stack>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row className='py-md-5'>
            <Col>
              <h3 className='pb-3'>Content Block 3</h3>
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
        </Container>
        <div className='bg-grey-100'>
          <Container>
            <Row className='py-5 d-flex align-items-center'>
              <Col md={{ span: 6, offset: 2 }} className='d-block d-md-none'>
                <Image alt='person watching screen' src={block4pic} />
              </Col>
              <Col md={4} className=''>
                <Card className='bg-grey-600' text='white'>
                  <Card.Body>
                    <Card.Title>Content Block 4</Card.Title>
                    <Card.Text>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia.
                    </Card.Text>
                    <div className='d-grid d-md-block'>
                      <Card.Link as={Button} variant='light'>
                        Call-to-action
                      </Card.Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={{ span: 6, offset: 2 }} className='d-none d-md-block'>
                <Image alt='person watching screen' src={block4pic} />
              </Col>
            </Row>
          </Container>
        </div>
      </LandingPageLayout>
    </>
  );
};

export default Home;
