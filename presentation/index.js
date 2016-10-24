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
  Fill,
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
  Table,
  TableRow,
  TableHeaderItem,
  TableItem,
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
  babelTower: require("../images/babel.jpg"),
  webpackGraph: require("../images/webpack_graph.png"),
  cowboy: require("../images/cowboy.jpg"),
  lint: require("../images/lint.jpg"),
  npmShape: require("../images/npm_shape.png"),
  javascript: require("../images/javascript.jpg"),
  javascript2: require("../images/javascript2.jpg"),
  moduleCounts: require("../images/module_counts.png"),
  redmonk: require("../images/redmonk.png"),
  jobTitles: require("../images/jobTitles.png"),
  survivejs: require("../images/survivejs.png")
}, v => v.replace('/', ''));

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "#09b5c4",
  quartenary: "rgba(255, 219, 169, 0.43)"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={slideTransition} transitionDuration={500}>
          <Slide transition={slideTransition} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              JavaScript in 2016
            </Heading>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
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

          <Slide transition={slideTransition}>
            <Layout>
              <Link href="http://redmonk.com/jgovernor/2015/07/31/programming-language-rankings-summer-2015/">
                <Image src={images.redmonk} />
              </Link>
            </Layout>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
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

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Job Trends
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

          <Slide transition={slideTransition}>
            <Appear fid="1">
              <Heading size={2} caps fit>
                Inline JavaScript
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={2} caps fit textColor="tertiary">
                AJAX (async)
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={2} caps fit>
                Single Page Applications
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={2} caps fit textColor="tertiary">
                Universal JavaScript
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              ECMAScript
            </Heading>
            <List>
              <Appear><ListItem>1995 - First version by Brendan Eich</ListItem></Appear>
              <Appear><ListItem>ES5 - 2009</ListItem></Appear>
              <Appear><ListItem>ES2015 (ES6) - 20+ new features (modules and sugar)</ListItem></Appear>
              <Appear><ListItem>ES2016 (ES7) - <code>array.includes</code>, <code>**</code></ListItem></Appear>
              <Appear><ListItem>
                <Link href="https://github.com/tc39/ecma262">Current proposals</Link>
              </ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              <Link href="http://node.green/">Node.js ES2015 Support</Link>
            </Heading>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              Language Features
            </Heading>
            <List>
              <Appear><ListItem>Loose typing. Example: functions are first class citizen</ListItem></Appear>
              <Appear><ListItem>Prototypal inheritance - classes are sugar on top of this</ListItem></Appear>
              <Appear><ListItem><code>Date</code> and <code>Math</code> derived from Java 1.0</ListItem></Appear>
              <Appear><ListItem>Functional programming capabilities (ES6 makes it sweeter)</ListItem></Appear>
              <Appear><ListItem>Main personal gripe - weak structures (mutability)</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <BlockQuote>
              <Quote>Java is to JavaScript as car is to carpet</Quote>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              Data Structures
            </Heading>
            <List>
              <Appear><ListItem>ES5 - <code>Object</code>, <code>Array</code>, <code>String</code>, <code>Number</code>, <code>Boolean</code>, <code>null</code>, and <code>undefined</code></ListItem></Appear>
              <Appear><ListItem>ES6 - <code>Set</code>, <code>Map</code>, <code>WeakSet</code>, and <code>Symbol</code></ListItem></Appear>
              <Appear><ListItem><Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays">Typed arrays for browser binary data</Link></ListItem></Appear>
              <Appear><ListItem><code>undefined</code> - Absence of value</ListItem></Appear>
              <Appear><ListItem><code>null</code> - Value known to exist which exact value unknown</ListItem></Appear>
              <Appear><ListItem>You can mimic other structures using the existing ones</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={4}>
              Queue
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../examples/queue.js")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={4}>
              Naïve Generator
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../examples/generator.js")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={4}>
              Power Generator
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../examples/power_generator.js")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={4}>
              Hoisting
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../examples/hoisting.js")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={4}>
              <code>this</code>
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../examples/this.js")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={4}>
              Functions
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../examples/functions.js")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={4}>
              Modules
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../examples/modules.js")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={4}>
              Classes I
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../examples/classes_01.js")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={4}>
              Classes II
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../examples/classes_02.js")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgImage={images.cowboy} bgDarken={0.75}>
            <BlockQuote>
              <Quote>{"Array(16).join('hero' - 1) + 'Batman';"}</Quote>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.lint} bgDarken={0.85}>
            <Heading caps>ESLint</Heading>
            <Heading caps size={2} textColor="primary">Pluggable linting for JavaScript</Heading>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.npmShape} bgDarken={0.75}>
            <Heading size={2} textColor="primary" margin="0px auto 40px">
              npm
            </Heading>
            <Link textColor="tertiary" href="https://anvaka.github.io/allnpmviz3d/">allnpmviz3d by @anvaka</Link>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.babelTower} bgDarken={0.85}>
            <Heading size={1} textColor="primary">
              <Link href="https://babeljs.io/">Babel</Link>
            </Heading>
            <List textColor="primary">
              <Appear><ListItem>ES2015+ and custom features</ListItem></Appear>
              <Appear><ListItem>Needs polyfills for some</ListItem></Appear>
              <Appear><ListItem>Presets and plugins</ListItem></Appear>
              <Appear><ListItem>Be careful with stage 0 features!</ListItem></Appear>
              <Appear><ListItem>Prefer spelling out the custom features you use</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <iframe
              width="100%"
              height="600px"
              src="https://babeljs.io/repl/"
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              Build Tools
            </Heading>
            <Layout>
              <Table>
                <thead>
                  <TableRow>
                    <TableHeaderItem>1st Gen.</TableHeaderItem>
                    <TableHeaderItem>2nd Gen.</TableHeaderItem>
                    <TableHeaderItem>3rd Gen.</TableHeaderItem>
                  </TableRow>
                </thead>
                <tbody>
                  <TableRow>
                    <TableItem>Make</TableItem>
                    <TableItem>Grunt</TableItem>
                    <TableItem>Browserify</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem></TableItem>
                    <TableItem>Gulp</TableItem>
                    <TableItem>Webpack</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem></TableItem>
                    <TableItem>Broccoli</TableItem>
                    <TableItem>JSPM</TableItem>
                  </TableRow>
                </tbody>
              </Table>
            </Layout>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              <Link href="https://webpack.github.io/">Webpack</Link>
            </Heading>
            <List>
              <Appear><ListItem>Application as a dependency graph</ListItem></Appear>
              <Appear><ListItem>Configuration driven</ListItem></Appear>
              <Appear><ListItem>Powerful, but hard to master</ListItem></Appear>
              <Appear><ListItem>Focus on bundling</ListItem></Appear>
              <Appear><ListItem><Link href="https://www.npmjs.com/package/webpack-merge">webpack-merge</Link></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={2}>
              Application Graph
            </Heading>
            <Link href="https://chrisbateman.github.io/webpack-visualizer/">
              <Image src={images.webpackGraph} margin="40px auto" height="324px" />
            </Link>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1} textColor="tertiary">
              <Link href="http://www.webpackbin.com/">
                WebpackBin
              </Link>
            </Heading>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Exercises
            </Heading>
            <List>
              <Appear><ListItem>Head to <Link href="http://www.webpackbin.com/">WebpackBin</Link> and create a new JavaScript file (set "is entry")</ListItem></Appear>
              <Appear><ListItem><code>console.log</code> something. You can also try <code>bin.log</code></ListItem></Appear>
              <Appear><ListItem>Develop an <code>add</code> function that accepts two parameters and adds them together.</ListItem></Appear>
              <Appear><ListItem>*Create a bound version (<code>addTwo</code>) of <code>add</code>. Look up <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind">MDN documentation</Link> to learn more.</ListItem></Appear>
              <Appear><ListItem>**Try out <Link href="http://es6katas.org/">ES6 Katas</Link></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Link href="http://www.survivejs.com/">
              <Heading size={1}>
                SurviveJS
              </Heading>
            </Link>
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
        </Deck>
      </Spectacle>
    );
  }
}
