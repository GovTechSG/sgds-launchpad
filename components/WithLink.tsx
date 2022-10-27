import {ReactNode} from "react";
import Link from "next/link";

export default function withLink(toWrap: ReactNode, href?: string) {
  if (href) {
    return <Link key={href} href={href} passHref>{toWrap}</Link>
  } else {
    return toWrap
  }
}