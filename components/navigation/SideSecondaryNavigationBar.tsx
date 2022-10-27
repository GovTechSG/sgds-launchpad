import {SideNav, SideNavProps} from "@govtechsg/sgds-react";
import {ReactNode, useCallback, useState} from "react";
import withLink from "../WithLink";

export interface NavItem {
  eventKey: string
  content?: ReactNode
  href?: string
  subItems?: NavItem[]
}

interface SideSecondaryNavigationBarProps extends SideNavProps {
  onChangeActiveKey?: () => {}
  sticky?: "sticky-sm-top" | "sticky-md-top" | "sticky-lg-top" | "sticky-xl-top" | "sticky-xxl-top" | "sticky-top"
  items?: NavItem[]
}

const renderItems = (items: NavItem[]) => {

}

export const SideSecondaryNavigationBar = (props: SideSecondaryNavigationBarProps) => {
  const [activeKey, setActiveKey] = useState(props.activeKey)
  const [activeNavLinkKey, setActiveNavLinkKey] = useState(props.activeNavLinkKey)

  const renderSubItems = useCallback((items?: NavItem[]) => {
    if (!items) {
      return <></>
    } else {
      return <>
        <SideNav.Collapse>
          <>
            {items.map(subitem => withLink(
              <SideNav.Link key={subitem.eventKey} eventKey={subitem.eventKey}
                            onClick={() => setActiveNavLinkKey(subitem.eventKey)}>
                {subitem.content}
              </SideNav.Link>, subitem?.href))
            }
          </>
        </SideNav.Collapse>
      </>
    }
  }, []);

  let className = [
    props.sticky,
    props.className,
  ].join(" ")

  return (
    <SideNav activeKey={activeKey} activeNavLinkKey={activeNavLinkKey} className={className}
             defaultActiveKey={props.items && props.items.length > 0 ? props.items[0].eventKey : activeKey}>
      {props.items ? props.items.map((item, i) =>
        <SideNav.Item key={item.eventKey} eventKey={item.eventKey}>

          {withLink(<SideNav.Button
            onClick={() => setActiveKey(item.eventKey)}>{item.content}</SideNav.Button>, item?.href)}
          {renderSubItems(item.subItems)}
        </SideNav.Item>
      ) : <></>}
    </SideNav>
  )
}
