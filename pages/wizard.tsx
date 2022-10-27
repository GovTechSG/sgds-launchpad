import {getSession} from "next-auth/react";
import {NextPageContext} from "next";
import {BRAND_NAME} from "../lib/config";
import Head from "next/head";
import {WidePageLayout} from "../components/layouts/WidePageLayout";
import {Button, Container, Form} from "@govtechsg/sgds-react";
import { useStep, StepMetadata, Stepper } from '@govtechsg/sgds-react'
import {FormEvent} from "react";
import ExampleStepper from "../components/ExampleStepper";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession({req: context.req})

  if (!session?.user) {
    return {redirect: {destination: '/signin'}}
  }

  return {
    props: {},
  }
}

export default function WizardPage() {
  const title = `${BRAND_NAME} - Eligibility Assessment`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title}/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <WidePageLayout meta={{title: "Wizard - Am I Eligible?"}}>
        <Container className="py-5">
          <ExampleStepper/>
        </Container>
      </WidePageLayout>
      <footer></footer>
    </>
  )
}
