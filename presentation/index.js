// Import React
import React from "react";
import mapValues from "lodash/mapValues";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./custom.css");

const slideTransition = ["slide"];
const images = mapValues({
  javascript: require("../images/javascript.jpg"),
  javascript2: require("../images/javascript2.jpg"),
  moduleCounts: require("../images/module_counts.png"),
  redmonk: require("../images/redmonk.png"),
  jobs: require("../images/jobs.png"),
  jobTitles: require("../images/jobTitles.png"),
  survivejs: require("../images/survivejs.png")
}, v => v.replace('/', ''));

preloader(images);

const theme = createTheme({
  primary: "#09b5c4"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={slideTransition} transitionDuration={500}>
          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              JavaScript in 2016
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              JavaScript Usage on Sites
            </Heading>
            <Markdown>
          {`
* 2011 - 38.2%
* 2013 - 60.4%
* 2015 - 70.5%
* 2016 - 73.5%
* Source: [W3Techs](http://w3techs.com/technologies/history_overview/javascript_library/all/y)
          `}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary"
            notes="<ul><li>Popular</li><li>Same goes for AltJS</li></ul>">
            <Layout>
              <Link href="http://redmonk.com/jgovernor/2015/07/31/programming-language-rankings-summer-2015/">
                <Image src={images.redmonk} />
              </Link>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary"
            notes="<ul><li>Amazing growth rate.</li><li>At this rate bigger than others combined.</li></ul>">
            <Heading size={1} textColor="tertiary">
              Module Counts
            </Heading>
            <Layout>
              <Image src={images.moduleCounts} padding="20px" />
            </Layout>
            <Layout>
              <Text>
                <Link href="http://www.modulecounts.com/">modulecounts.com</Link>
              </Text>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary"
            notes="<ul><li>Angular dominates the work market.</li><li>Early signs of React.</li></ul>">
            <Heading size={1} textColor="tertiary">
              Job Trends
            </Heading>
            <Layout>
              <Image src={images.jobs} padding="20px" />
            </Layout>
            <Layout>
              <Text>
                <Link href="http://www.indeed.com/jobtrends/q-React.js-q-Knockout-q-Backbone.js-q-Angularjs.html">Indeed</Link>
              </Text>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary"
            notes="<ul><li>Also job titles change.</li><li>Increasing demand for full stack developers.</li></ul>">
            <Heading size={1} textColor="tertiary">
              Job Trends II
            </Heading>
            <Layout>
              <Image src={images.jobTitles} padding="20px" />
            </Layout>
            <Layout>
              <Text>
                <Link href="http://www.indeed.com/jobtrends/q-backend-q-frontend-q-full-stack.html">Indeed</Link>
              </Text>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgColor="white" notes="">
            <Heading size={1} textColor="primary">
              SurviveJS
            </Heading>
            <Image src={images.survivejs} margin="0px auto 40px" height="524px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading size={1} caps fit textColor="primary">
              Made in Finland by
            </Heading>
            <Link href="https://twitter.com/bebraw">
              <Heading caps fit size={2} textColor="secondary">
                Juho Vepsäläinen
              </Heading>
            </Link>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1} textColor="tertiary">
              Thank you
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
