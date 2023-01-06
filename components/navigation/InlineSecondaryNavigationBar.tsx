import {Nav, Navbar, NavbarProps} from "@govtechsg/sgds-react";
import {ReactNode} from "react";
import withLink from "../WithLink";

export interface NavItem {
  eventKey: string
  content?: ReactNode
  href?: string
  subItems?: NavItem[]
}

interface InlineSecondaryNavigationBarProps extends NavbarProps {
  onChangeActiveKey?: () => {}
  items?: NavItem[]
}

const renderItems = (items: NavItem[]) => {

}

export const InlineSecondaryNavigationBar = (props: InlineSecondaryNavigationBarProps) => {
  let className = [
    props.sticky,
    props.className,
  ].join(" ")

  return (
    <Navbar className={className} {...props}>
      <Nav>
        <Nav.Dropdown title={props.title ?? "Sections"}>
          {props.items?.map(item => <>
            {withLink(<Nav.Dropdown.Header>{item.content}</Nav.Dropdown.Header>, item.href)}
            {item.subItems?.map(subitem => <>
              {withLink(<Nav.Dropdown.Item>{subitem.content}</Nav.Dropdown.Item>, subitem.href)}
            </>)}
          </>)}
        </Nav.Dropdown>
      </Nav>
    </Navbar>
  )
}
