import {SessionProvider} from "next-auth/react"
import type {AppProps} from 'next/app'
import '@govtechsg/sgds/css/sgds.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../public/App.css'
import '@govtechsg/sgds-masthead/dist/sgds-masthead/sgds-masthead.css';
import {SgdsMasthead} from "@govtechsg/sgds-masthead-react"
import {Session} from "next-auth";

function MyApp({Component, pageProps: {session, ...pageProps}}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <SgdsMasthead/>
      <Component {...pageProps}/>
    </SessionProvider>
  )
}

export default MyApp
