import type {NextPage} from 'next'
import Head from 'next/head'
import {BRAND_NAME} from "../lib/config";
import {SectionPageLayout} from "../components/layouts/SectionPageLayout";
import {NavItem} from "../components/navigation/SideSecondaryNavigationBar";

const sideNavItems: NavItem[] = [
  {
    eventKey: "businesses",
    content: "For Businesses",
    subItems: [
      {
        eventKey: "overview",
        href: "#overview",
        content: "Overview"
      },
      {
        eventKey: "eligibility",
        href: "#eligibility",
        content: "Is My Business Eligible?"
      },
      {
        eventKey: "conditions",
        href: "#conditions",
        content: "Support Conditions"
      },
    ],
  },
  {
    eventKey: "registration",
    content: "Registering for Support",
    subItems: [
      {
        eventKey: "process",
        href: "#process",
        content: "Registration Process"
      },
      {
        eventKey: "collection",
        href: "#collection",
        content: "Employee Collection"
      },
      {
        eventKey: "employees",
        href: "#employees",
        content: "Employee Support"
      },
    ],
  },
]

const BusinessesPage: NextPage = () => {
  const title = `${BRAND_NAME} - Businesses`
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title}/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <SectionPageLayout meta={{title: "For Businesses"}} sideNavigationMenu={sideNavItems}>
        <h1>For Businesses</h1>
        <h2 id="overview">Overview</h2>
        <p>
          Many pats doggorino vvv heckin good boys and girls ur givin me a spook aqua doggo puggo, corgo long doggo wow
          very biscit shoob. Heckin angery woofer blop he made many woofs blop long doggo wrinkler very hand that feed
          shibe pupper, such treat long bois very taste wow heckin tungg aqua doggo. Heckin good boys and girls I am
          bekom fat fat boi the neighborhood pupper doge very good spot, I am bekom fat smol tungg.
        </p>
        <h2 id="eligibility">Is My Business Eligible?</h2>
        Doggo ipsum heckin long doggo long water shoob length boy dat tungg tho, borkdrive you are doing me the
        shock. blep doge puggorino. Doggorino big ol pupper floofs clouds he made many woofs mlem, floofs fluffer
        clouds big ol pupper, very jealous pupper bork lotsa pats wow such tempt. Adorable doggo you are doing me
        the shock borking doggo heck corgo borkf much ruin diet, stop it fren boofers clouds what a nice floof. Boof
        very hand that feed shibe most angery pupper I have ever seen ruff pupperino, doggorino stop it fren you are
        doin me a concern borking doggo shibe, long water shoob big ol I am bekom fat. Floofs doggorino boofers,
        porgo. Fat boi h*ck blep pupper long doggo boofers, vvv you are doin me a concern heckin good boys and girls
        long water shoob, wrinkler heckin bork woofer. Clouds smol very taste wow borkf smol borking doggo with a
        long snoot for pats wrinkler, noodle horse long doggo super chub smol.
        <h2 id="conditions">Support Conditions</h2>
        Very hand that feed shibe you are doing me the shock such treat pats long doggo, heckin angery woofer thicc
        fluffer. Shoober woofer very hand that feed shibe very good spot borking doggo puggorino, tungg heckin big ol.
        Shoob doggo borkf shooberino doge ruff, dat tungg tho smol yapper. Yapper doggo puggorino much ruin diet lotsa
        pats borkdrive you are doin me a concern, sub woofer fluffer puggorino dat tungg tho. Blep boofers you are
        doing me the shock maximum borkdrive most angery pupper I have ever seen, fat boi big ol pupper yapper.
        <h1>Registering for Support</h1>
        <h2 id="process">Registration Process</h2>
        Boofers length boy puggo wow such tempt, big ol pupper. You are doin me a concern shoober puggorino wow very
        biscit h*ck, blep long bois dat tungg tho. Boofers vvv dat tungg tho super chub heckin good boys, many pats
        fluffer sub woofer length boy, sub woofer porgo vvv. Fat boi you are doing me a frighten doggorino heck long
        doggo borkf, very hand that feed shibe heckin good boys and girls heckin angery woofer. Wrinkler tungg shoob
        long doggo heckin good boys and girls, noodle horse aqua doggo smol. Clouds heck doggo very good spot
        pupperino doggo, pupper floofs doge long doggo corgo, vvv wow such tempt stop it fren big ol pupper. Wow very
        biscit dat tungg tho I am bekom fat heckin angery woofer, long water shoob.
        <h2 id="collection">Automatic Collection</h2>
        Most angery pupper I have ever seen long water shoob long bois I am bekom fat aqua doggo, doge shibe. Wow very
        biscit what a nice floof such treat snoot long woofer, maximum borkdrive smol. Wow such tempt boofers heckin
        good boys and girls clouds waggy wags ruff fluffer, wrinkler doggo clouds tungg. blep pupper. stop it fren
        heck. Dat tungg tho puggo ruff what a nice floof borkf, heckin good boys tungg. Pats doge big ol boof
        borkdrive, puggorino big ol pupper heckin. Heckin puggorino noodle horse shibe most angery pupper I have ever
        seen the neighborhood pupper, noodle horse dat tungg tho you are doin me a concern. long bois porgo very taste
        wow. Snoot bork ruff puggorino pats h*ck clouds, sub woofer h*ck woofer very hand that feed shibe heckin good
        boys and girls. Pupper pupperino very hand that feed shibe doggorino boof, sub woofer fat boi you are doin me
        a concern boofers floofs, he made many woofs heckin good boys and girls doggorino.
        <h2 id="employees">Employee Support</h2>
        Pats shibe extremely cuuuuuute you are doing me the shock floofs many pats you are doin me a concern, corgo
        long woofer heckin sub woofer long doggo, heckin good boys and girls extremely cuuuuuute waggy wags smol
        boofers. Shoober corgo borkdrive wow very biscit, very taste wow. Super chub heckin heckin angery woofer
        shooberino length boy doge doggorino fat boi doge pats, puggorino floofs porgo you are doing me a frighten
        very jealous pupper shoober dat tungg tho. Very taste wow ur givin me a spook much ruin diet stop it fren
        shoob, fat boi borkdrive long water shoob. Blop pupper maximum borkdrive wow such tempt snoot, what a nice
        floof heckin. Yapper woofer aqua doggo very jealous pupper you are doing me the shock, doing me a frighten
        tungg fat boi. Puggo blep sub woofer, much ruin diet. Length boy very hand that feed shibe adorable doggo blep
        super chub, yapper very good spot.
      </SectionPageLayout>
      <footer></footer>
    </>
  )
}

export default BusinessesPage
