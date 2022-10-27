import Link from 'next/link';
import {Navbar, NavbarProps} from '@govtechsg/sgds-react';
import {ReactNode} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";

export interface TopMinimalNavigationBarProps extends NavbarProps {
  brandName?: ReactNode,
}

export const TopMinimalNavigationBar = (props: TopMinimalNavigationBarProps) => {
  const router = useRouter();
  const {data: session} = useSession();
  return (
    <Navbar {...props}>
      <Link href="/" passHref><Navbar.Brand>{props.brandName}</Navbar.Brand></Link>
    </Navbar>
  );
};