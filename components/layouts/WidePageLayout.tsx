import {TopMainNavigationBar} from "../navigation/TopMainNavigationBar";
import {BRAND_NAME} from "../../lib/config";
import {ReactNode} from "react";
import {NavItem} from "../navigation/SideSecondaryNavigationBar";
import Head from "next/head";
import {Col, Row} from "@govtechsg/sgds-react";
import DefaultFooter from "../DefaultFooter";


interface WidePageLayoutProps {
  meta?: { title?: string, content?: string, }
  sideNavigationMenu?: NavItem[],
  children?: ReactNode,
}

export const WidePageLayout = (props: WidePageLayoutProps) => {
  return (
    <>
      {props.meta ?
        <Head>
          {props.meta && props.meta.title ? <title>{props.meta.title}</title> : <></>}
          {props.meta && props.meta.content ? <meta name="description" content={props.meta.content}/> : <></>}
          <link rel="icon" href="/favicon.ico"/>
        </Head> : <></>
      }
      <main>
        <TopMainNavigationBar expand="lg" brandName={BRAND_NAME}/>
        <div className="has-background-gradient">
          <Row className="py-4 px-5">
            <Col>
              <h1>{props.meta?.title}</h1>
            </Col>
          </Row>
        </div>
        {props.children}
      </main>
      <DefaultFooter/>
    </>
  )
}