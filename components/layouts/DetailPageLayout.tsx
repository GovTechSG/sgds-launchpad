import {TopMainNavigationBar} from "../navigation/TopMainNavigationBar";
import {BRAND_NAME} from "../../lib/config";
import {ReactNode} from "react";
import {NavItem, SideSecondaryNavigationBar} from "../navigation/SideSecondaryNavigationBar";
import {Col, Container, Row} from "@govtechsg/sgds-react";
import {InlineSecondaryNavigationBar} from "../navigation/InlineSecondaryNavigationBar";
import Head from "next/head";
import DefaultFooter from "../DefaultFooter";


export interface DetailPageLayoutProps {
  meta?: { title?: string, content?: string, }
  sideNavigationMenu?: NavItem[],
  children?: ReactNode,
}

export const DetailPageLayout = (props: DetailPageLayoutProps) => {
  return (
    <>
      <main>
        {props.meta ?
          <Head>
            {props.meta && props.meta.title ? <title>{props.meta.title}</title> : <></>}
            {props.meta && props.meta.content ? <meta name="description" content={props.meta.content}/> : <></>}
            <link rel="icon" href="/favicon.ico"/>
          </Head> : <></>
        }
        <TopMainNavigationBar expand="lg" brandName={BRAND_NAME}/>
        {/* <InlineSecondaryNavigationBar className="d-lg-none sticky-top" hasBorderBottom bg="white"
                                      items={props.sideNavigationMenu}/> */}
        <Container fluid>
          <Row>
            {props.sideNavigationMenu ? <Col className="col-12 col-md-2">
              <SideSecondaryNavigationBar alwaysOpen items={props.sideNavigationMenu}
                                          className="d-none d-lg-block py-lg-5"/>
            </Col> : <></>}
            <Col className="is-offset-1 col-12 col-md-10">
              {props.children}
            </Col>
          </Row>
        </Container>
      </main>
      <DefaultFooter/>
    </>
  )
}