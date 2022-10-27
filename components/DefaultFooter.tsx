import {Footer} from "@govtechsg/sgds-react";
import {BRAND_NAME, ORGANISATION_NAME} from "../lib/config";

export default function DefaultFooter() {
  return (
    <Footer>
      <Footer.Top>
        <h1>{ORGANISATION_NAME}</h1>
        <Footer.Top.Header>
          {ORGANISATION_NAME} serves citizens and business by being a constant partner in government to support both parties needs.
        </Footer.Top.Header>
        <Footer.Top.ContactLinks>
          <a href="" target="_blank">
            Contact
          </a>
          <a href="" target="_blank">
            Feedback
          </a>
        </Footer.Top.ContactLinks>
      </Footer.Top>
      <Footer.Bottom>
        <Footer.Bottom.Links>
          <a href="" target="_blank">
            Report Vulnerability
          </a>
          <a href="">Privacy Statement</a>
          <a href="">Terms of use</a>
        </Footer.Bottom.Links>
        <Footer.Bottom.Copyrights className="text-end">
          © 2022 Government of Singapore
          <br/>
          Last Updated 08 Feb 2022
        </Footer.Bottom.Copyrights>
      </Footer.Bottom>
    </Footer>
  )
}