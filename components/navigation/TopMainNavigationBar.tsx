import Link from 'next/link';
import {Col, Container, Nav, Navbar, NavbarProps, NavDropdown, Row} from '@govtechsg/sgds-react';
import {ReactNode, SetStateAction, useState} from "react";
import {signIn, signOut, useSession} from "next-auth/react";
import {useRouter} from "next/router";
import * as Icon from "react-bootstrap-icons";

export interface TopMainNavigationBarProps extends NavbarProps {
  brandName?: ReactNode,
}

export const TopMainNavigationBar = (props: TopMainNavigationBarProps) => {
  const router = useRouter();
  const [active, setActive] = useState(router.pathname);
  const {data: session} = useSession();
  const clickNavbarItem = (eventKey: SetStateAction<string>) => {
    setActive(eventKey);
  };
  const {
    brandName,
    ...selectedProps
  } = props;
  return (
    <Navbar {...selectedProps}>
      <Link href="/" passHref><Navbar.Brand>{props.brandName}</Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" navbarScroll activeKey={active}>
          <Nav.Item>
            <Link href="/guides" passHref>
              <Nav.Link
                eventKey="/guides"
                onClick={() => clickNavbarItem('/guides')}
              >
                Guides and Case Studies
              </Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Dropdown eventKey="/citizens" title="Citizens" id="nav-dropdown">
            <Link href="/citizens#overview" passHref><Nav.Dropdown.Item eventKey="/citizens#overview">Overview</Nav.Dropdown.Item></Link>
            <Link href="/citizens#eligibility" passHref><Nav.Dropdown.Item eventKey="/citizens#eligibility">Am I Eligible?</Nav.Dropdown.Item></Link>
            <Link href="/citizens#howtoapply" passHref><Nav.Dropdown.Item eventKey="/citizens#howtoapply">How to Apply</Nav.Dropdown.Item></Link>
          </Nav.Dropdown>
          <Nav.Dropdown eventKey="/businesses" title="Businesses" id="nav-dropdown">
            <Link href="/businesses#overview" passHref><Nav.Dropdown.Item eventKey="/businesses#overview">Overview</Nav.Dropdown.Item></Link>
            <Link href="/businesses#eligibility" passHref><Nav.Dropdown.Item eventKey="/businesses#eligibility">Eligibility</Nav.Dropdown.Item></Link>
            <Link href="/businesses#conditions" passHref><Nav.Dropdown.Item eventKey="/businesses#conditions">Conditions</Nav.Dropdown.Item></Link>
            <Nav.Dropdown.Divider />
            <Link href="/businesses#process" passHref><Nav.Dropdown.Item eventKey="/businesses#process">Registration Process</Nav.Dropdown.Item></Link>
            <Link href="/businesses#collection" passHref><Nav.Dropdown.Item eventKey="/businesses#collection">Automatic Collection</Nav.Dropdown.Item></Link>
            <Link href="/businesses#employees" passHref><Nav.Dropdown.Item eventKey="/businesses#employees">Employee Support</Nav.Dropdown.Item></Link>
          </Nav.Dropdown>
          <Nav.Item>
            <Link href="/collection" passHref>
              <Nav.Link
                eventKey="/collection"
                onClick={() => clickNavbarItem('/collection')}
              >
                Collection
              </Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link href="/faq" passHref>
              <Nav.Link
                eventKey="/faq"
                onClick={() => clickNavbarItem('/faq')}
              >
                FAQs
              </Nav.Link>
            </Link>
          </Nav.Item>

          {/*<Nav.Dropdown eventKey="/about" isMegaMenu title={"Services"}>*/}
          {/*  <Container fluid="lg">*/}
          {/*    <Row className={"p-4"}>*/}
          {/*      <Col md={12}>*/}
          {/*        <h4>*/}
          {/*          We make the future possible*/}
          {/*        </h4>*/}
          {/*        <p>*/}
          {/*          by using technology*/}
          {/*        </p>*/}
          {/*      </Col>*/}
          {/*      <Col>*/}
          {/*        <Nav.Dropdown.Item eventKey="5.1">Action</Nav.Dropdown.Item>*/}
          {/*        <Nav.Dropdown.Item eventKey="5.2">Action</Nav.Dropdown.Item>*/}
          {/*        <Nav.Dropdown.Item eventKey="5.3">Action</Nav.Dropdown.Item>*/}
          {/*      </Col>*/}
          {/*      <Col>*/}
          {/*        <Nav.Dropdown.Item eventKey="5.4">Action</Nav.Dropdown.Item>*/}
          {/*        <Nav.Dropdown.Item eventKey="5.5">Action</Nav.Dropdown.Item>*/}
          {/*        <Nav.Dropdown.Item eventKey="5.6">Action</Nav.Dropdown.Item>*/}
          {/*      </Col>*/}
          {/*    </Row>*/}
          {/*  </Container>*/}
          {/*</Nav.Dropdown>*/}
        </Nav>
        <Nav activeKey={active}>
          {session &&
            <NavDropdown title={<><Icon.PersonCircle/>{session.user?.name}</>} align="end">
              <NavDropdown.Item
                href="#profile"
              >
                Account Settings
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#help"
              >
                Help and Documentation
              </NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item
                onClick={() => signOut()}
              >
                Sign out
              </NavDropdown.Item>
            </NavDropdown>
          }
          {!session &&
            <Nav.Item>
              <Nav.Link
                eventKey="/signin"
                onClick={() => {
                  clickNavbarItem('/signin');
                  signIn();
                }}
              >
                Sign in
              </Nav.Link>
            </Nav.Item>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};