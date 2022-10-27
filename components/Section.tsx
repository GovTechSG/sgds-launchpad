import {ContainerProps} from "@govtechsg/sgds-react";
import {Container} from "react-bootstrap";

export interface SectionProps extends ContainerProps {

}

export const Section = (props: SectionProps) => {
  const selectedProps = {
    ...props,
    className: "section " + props.className,
  }

  return (
    <Container {...selectedProps}>
      {props.children}
    </Container>
  )
}
