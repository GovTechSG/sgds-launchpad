import type {NextPage} from 'next'
import Head from 'next/head'
import {BRAND_NAME} from "../lib/config";
import {SectionPageLayout} from "../components/layouts/SectionPageLayout";
import {NavItem} from "../components/navigation/SideSecondaryNavigationBar";

const sideNavItems: NavItem[] = [
  {
    eventKey: "developers",
    content: "For Citizens",
    subItems: [
      {
        eventKey: "overview",
        href: "#overview",
        content: "Overview"
      },
      {
        eventKey: "eligibility",
        href: "#eligibility",
        content: "Am I Eligible?"
      },
      {
        eventKey: "howtoapply",
        href: "#howtoapply",
        content: "How to apply"
      },
    ],
  },
]

const FeaturesPage: NextPage = () => {
  const title = `${BRAND_NAME} - Citizens`
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title}/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <SectionPageLayout meta={{title: "For Citizens"}} sideNavigationMenu={sideNavItems}>
        <h1>For Citizens</h1>
        <h2 id="overview">Overview</h2>
        <p>
          Doggo ipsum heckin long doggo long water shoob length boy dat tungg tho, borkdrive you are doing me the
          shock. blep doge puggorino. Doggorino big ol pupper floofs clouds he made many woofs mlem, floofs fluffer
          clouds big ol pupper, very jealous pupper bork lotsa pats wow such tempt. Adorable doggo you are doing me
          the shock borking doggo heck corgo borkf much ruin diet, stop it fren boofers clouds what a nice floof. Boof
          very hand that feed shibe most angery pupper I have ever seen ruff pupperino, doggorino stop it fren you are
          doin me a concern borking doggo shibe, long water shoob big ol I am bekom fat. Floofs doggorino boofers,
          porgo. Fat boi h*ck blep pupper long doggo boofers, vvv you are doin me a concern heckin good boys and girls
          long water shoob, wrinkler heckin bork woofer. Clouds smol very taste wow borkf smol borking doggo with a
          long snoot for pats wrinkler, noodle horse long doggo super chub smol.
        </p>
        <h2 id="eligibility">Am I eligible?</h2>
        Many pats doggorino vvv heckin good boys and girls ur givin me a spook aqua doggo puggo, corgo long doggo wow
        very biscit shoob. Heckin angery woofer blop he made many woofs blop long doggo wrinkler very hand that feed
        shibe pupper, such treat long bois very taste wow heckin tungg aqua doggo. Heckin good boys and girls I am
        bekom fat fat boi the neighborhood pupper doge very good spot, I am bekom fat smol tungg.
        <h2 id="howtoapply">How to apply</h2>
        Very hand that feed shibe you are doing me the shock such treat pats long doggo, heckin angery woofer thicc
        fluffer. Shoober woofer very hand that feed shibe very good spot borking doggo puggorino, tungg heckin big ol.
        Shoob doggo borkf shooberino doge ruff, dat tungg tho smol yapper. Yapper doggo puggorino much ruin diet lotsa
        pats borkdrive you are doin me a concern, sub woofer fluffer puggorino dat tungg tho. Blep boofers you are
        doing me the shock maximum borkdrive most angery pupper I have ever seen, fat boi big ol pupper yapper.
      </SectionPageLayout>
      <footer></footer>
    </>
  )
}

export default FeaturesPage
