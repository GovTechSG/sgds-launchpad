import { Footer } from "@govtechsg/sgds-react";
import { ORGANISATION_NAME } from "../lib/config";

export default function DefaultFooter() {
  return (
      <Footer>
        <Footer.Top>
          <h1>{ORGANISATION_NAME}</h1>
          <Footer.Top.Header>
          {ORGANISATION_NAME} serves citizens and business by being a constant partner in
            government to support both parties needs
          </Footer.Top.Header>
          <Footer.Top.ItemGroup>
            <Footer.Top.Item itemTitle='Column 1'>
              <a href=''>About Us</a>
              <a href=''>This is a super long link</a>
              <a href=''>Test</a>
              <a href=''>Test</a>
            </Footer.Top.Item>
            <Footer.Top.Item itemTitle='Column 2'>
              <a href=''>About Us</a>
              <a href=''>This is a super long link</a>
              <a href=''>Test</a>
              <a href=''>Test</a>
            </Footer.Top.Item>
            <Footer.Top.Item itemTitle='Column 3'>
              <a href=''>About Us</a>
              <a href=''>This is a super long link</a>
              <a href=''>Test</a>
              <a href=''>Test</a>
            </Footer.Top.Item>
            <Footer.Top.Item itemTitle='Column 4'>
              <a href=''>About Us</a>
              <a href=''>This is a super long link</a>
              <a href=''>Test</a>
              <a href=''>Test</a>
            </Footer.Top.Item>
            <Footer.Top.Item itemTitle='Column 5'>
              <a href=''>About Us</a>
              <a href=''>This is a super long link</a>
              <a href=''>Test</a>
              <a href=''>Test</a>
            </Footer.Top.Item>
            <Footer.Top.Item itemTitle='Column 6'>
              <a href=''>About Us</a>
              <a href=''>This is a super long link</a>
              <a href=''>Test</a>
              <a href=''>Test</a>
            </Footer.Top.Item>
          </Footer.Top.ItemGroup>
          <Footer.Top.ContactLinks>
            <a href=''>Contact</a>
            <a href=''>Feedback</a>
            <a
              href='https://www.reach.gov.sg/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Reach.gov.sg
            </a>
          </Footer.Top.ContactLinks>
        </Footer.Top>
        <Footer.Bottom>
          <Footer.Bottom.Links>
            <a
              href='https://tech.gov.sg/report_vulnerability'
              target='_blank'
              rel='noopener noreferrer'
            >
              Report Vulnerability
            </a>
            <a href=''>Privacy</a>
            <a href=''>Terms of use</a>
          </Footer.Bottom.Links>
          <Footer.Bottom.Copyrights>
            © 2022 Government of Singapore. Last Updated 08 Feb 2022
          </Footer.Bottom.Copyrights>
        </Footer.Bottom>
      </Footer>
  );
}
