import Link from "next/link";
import { Nav, Navbar, NavbarProps } from "@govtechsg/sgds-react";
import { ReactNode, SetStateAction, useState } from "react";
import { useRouter } from "next/router";
import agencyLogo from "../../public/brand_logo.png";

export interface TopMainNavigationBarProps extends NavbarProps {
  brandName?: ReactNode;
}

export const TopMainNavigationBar = (props: TopMainNavigationBarProps) => {
  const router = useRouter();
  const [active, setActive] = useState(router.pathname);
  const clickNavbarItem = (eventKey: SetStateAction<string>) => {
    setActive(eventKey);
  };
  const { brandName, ...selectedProps } = props;
  return (
    <Navbar {...selectedProps} className='py-2'>
      <Link href='/' passHref>
        <Navbar.Brand>
          <img width={70} height={70} src={agencyLogo.src} alt='Home' />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <div className='me-auto'></div>
        <Nav navbarScroll activeKey={active}>
          <Nav.Item>
            <Link href='#' passHref>
              <Nav.Link eventKey='nav1' onClick={() => clickNavbarItem("nav1")}>
                Nav 1
              </Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link href='#' passHref>
              <Nav.Link eventKey='nav2' onClick={() => clickNavbarItem("nav2")}>
                Nav 2
              </Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link href='#' passHref>
              <Nav.Link eventKey='nav3' onClick={() => clickNavbarItem("nav3")}>
                Nav 3
              </Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link href='#' passHref>
              <Nav.Link eventKey='nav4' onClick={() => clickNavbarItem("nav4")}>
                Nav 4
              </Nav.Link>
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
