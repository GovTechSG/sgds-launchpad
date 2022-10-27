import {TopMainNavigationBar} from "../navigation/TopMainNavigationBar";
import {BRAND_NAME} from "../../lib/config";
import {ReactNode} from "react";
import DefaultFooter from "../DefaultFooter";


interface LandingPageLayoutProps {
  children?: ReactNode,
}

export const LandingPageLayout = (props: LandingPageLayoutProps) => {
  return (
    <>
      <main>
        <TopMainNavigationBar expand="lg" brandName={BRAND_NAME}/>
        {props.children}
        <DefaultFooter />
      </main>
    </>
  )
}