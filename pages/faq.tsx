import type {NextPage} from 'next'
import Head from 'next/head'
import {SectionPageLayout} from "../components/layouts/SectionPageLayout";
import {NavItem} from "../components/navigation/SideSecondaryNavigationBar";
import {Section} from "../components/Section";

const sideNavItems: NavItem[] = [
  {
    eventKey: "abcs",
    content: "Our ABCs",
    subItems: [
      {
        eventKey: "agile",
        href: "#agile",
        content: "Agile"
      },
      {
        eventKey: "bold",
        href: "#bold",
        content: "Bold"
      },
      {
        eventKey: "collaborative",
        href: "#collaborative",
        content: "Collaborative"
      },
    ],
  },
  {
    eventKey: "principles",
    content: "Our Principles",
    subItems: [
      {
        eventKey: "integrity",
        href: "#integrity",
        content: "Integrity"
      },
      {
        eventKey: "service",
        href: "#service",
        content: "Service"
      },
      {
        eventKey: "excellence",
        href: "#excellence",
        content: "Excellence"
      },
    ],
  },
]

const FAQPage: NextPage = () => {
  const title = `Frequently Asked Questions`
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title}/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <SectionPageLayout meta={{title: title}} sideNavigationMenu={sideNavItems}>
        <Section>
          <h1>Our ABCs</h1>
        </Section>
        <Section id="agile">
          <h2>Agile</h2>
          <p>
            Doggo ipsum smol much ruin diet you are doing me the shock extremely cuuuuuute borkdrive wow very biscit vvv
            mlem, shoob heckin angery woofer corgo wrinkler waggy wags blep.
          </p>
        </Section>
        <Section id="bold">
          <h2>Bold</h2>
          <p>
            Blop blep long bois length boy most angery pupper I have ever seen, fat boi aqua doggo porgo borkdrive big
            ol, heckin angery woofer big ol pupper heckin angery woofer. Snoot super chub much ruin diet blop vvv,
            shooberino adorable doggo tungg adorable doggo, many pats pats such treat.
          </p>
        </Section>
        <Section id="collaborative">
          <h2>Collaborative</h2>
          <p>
            heckin angery woofer thicc. Borking doggo blep pupper heckin stop it fren sub woofer, wow very biscit doggo
            corgo heckin. borkf borkdrive. Stop it fren waggy wags porgo lotsa pats doing me a frighten, long bois pats
            such treat tungg, many pats such treat fluffer.
          </p>
        </Section>
        <Section>
          <h1>Our Principles</h1>
        </Section>
        <Section id="integrity">
          <h2>Integrity</h2>
          <p>
            Doggo ipsum smol much ruin diet you are doing me the shock extremely cuuuuuute borkdrive wow very biscit vvv
            mlem, shoob heckin angery woofer corgo wrinkler waggy wags blep.
          </p>
        </Section>
        <Section id="service">
          <h2>Service</h2>
          <p>
            Blop blep long bois length boy most angery pupper I have ever seen, fat boi aqua doggo porgo borkdrive big
            ol, heckin angery woofer big ol pupper heckin angery woofer. Snoot super chub much ruin diet blop vvv,
            shooberino adorable doggo tungg adorable doggo, many pats pats such treat.
          </p>
        </Section>
        <Section id="excellence">
          <h2>Excellence</h2>
          <p>
            heckin angery woofer thicc. Borking doggo blep pupper heckin stop it fren sub woofer, wow very biscit doggo
            corgo heckin. borkf borkdrive. Stop it fren waggy wags porgo lotsa pats doing me a frighten, long bois pats
            such treat tungg, many pats such treat fluffer.
          </p>
        </Section>
      </SectionPageLayout>
      <footer></footer>
    </>
  )
}

export default FAQPage
