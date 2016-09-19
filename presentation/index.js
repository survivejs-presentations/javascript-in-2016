// Import React
import React from "react";

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
const images = {
  survivejs: require("../images/survivejs.png").replace("/", "")
};

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
              React API Design
            </Heading>
            <Heading size={2} textColor="white">
              Case <Link href="http://reactabular.js.org">Reactabular</Link>
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Starting Points
            </Heading>
            <Markdown>
{`
* Needed a table for custom CMS. No proper solutions at the time.
* Decided to push logic to a column definition
* Developed as a single package containing everything you need (monolith)
* First commit - 19.01.2015
* First public release three days later
`}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1} textColor="tertiary">
              0.2.0 - 22.01.2015
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="white" notes="">
            <CodePane
              lang="jsx"
              source={require("raw!../examples/reactabular_01.js")}
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="white" notes="">
            <CodePane
              lang="jsx"
              source={require("raw!../examples/reactabular_02.jsx")}
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="white" notes="">
            <CodePane
              lang="jsx"
              source={require("raw!../examples/reactabular_03.jsx")}
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1} textColor="tertiary">
              0.3.0 - 29.01.2015
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Main Improvements
            </Heading>
            <Markdown>
{`
* Further iteration on the basic ideas
* Pushed [react-pagify](https://www.npmjs.com/package/react-pagify) to a package of its own. Used to experiment with React context based design.
* Separated pagination logic to [segmentize](https://www.npmjs.com/package/segmentize) (no React dependency)
* Search, sort, inline editing through the cell interface
`}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition} bgColor="white" notes="">
            <CodePane
              lang="jsx"
              source={require("raw!../examples/reactabular_04.jsx")}
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1} textColor="tertiary">
              0.4.0 - 03.02.2015
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Main Improvements
            </Heading>
            <Markdown>
{`
* Refactored events as header (handlers) to pass to the component. On retrospect, not flexible enough.
`}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition} bgColor="white" notes="">
            <CodePane
              lang="jsx"
              source={require("raw!../examples/reactabular_05.jsx")}
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1} textColor="tertiary">
              0.5.0 - 07.04.2015
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Main Improvements
            </Heading>
            <Markdown>
{`
* First external contribution
* Documentation improvements, React fatigue
* Initial tests
* More flexible sorting (basic algorithms)
* Highlighting search results
`}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1} textColor="tertiary">
              0.6.0 - 04.06.2015
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Main Improvements
            </Heading>
            <Markdown>
{`
* [![bitHound Score](https://www.bithound.io/github/reactabular/reactabular/badges/score.svg)](https://www.bithound.io/github/reactabular/reactabular) [![Dependency Status](https://david-dm.org/reactabular/reactabular.svg)](https://david-dm.org/reactabular/reactabular)
* More flexible highlighting interface
`}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1} textColor="tertiary">
              0.7.0 - 27.08.2015
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Main Improvements
            </Heading>
            <Markdown>
{`
* More external contributions (6 contributors by now)
* [![Join the chat at https://gitter.im/reactabular/reactabular](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/reactabular/reactabular) [![build status](https://secure.travis-ci.org/reactabular/reactabular.svg)](http://travis-ci.org/reactabular/reactabular)
* Allow custom props per row
* Support for editing complex objects
`}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1} textColor="tertiary">
              0.8.0 - 14.10.2015
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Main Improvements
            </Heading>
            <Markdown>
{`
* Realized setting row keys is a good idea (performance)
* More React fatigue (tooling keeps changing)
* Moved from Jest to Karma/Mocha
`}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1} textColor="tertiary">
              0.9.0 - 04.11.2015
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Main Improvements
            </Heading>
            <Markdown>
{`
* Dropped dev branch in favor of single one (kept getting PRs against master), not a lot of value in separation
* Split up documentation to multiple files over one huge README
`}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1} textColor="tertiary">
              0.10.0 - 19.01.2016
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Main Improvements
            </Heading>
            <Markdown>
{`
* 11 external contributors
* header &rarr; columnNames
* className &rarr; headerClass
`}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1} textColor="tertiary">
              0.11.0 - 14.02.2016
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Main Improvements
            </Heading>
            <Markdown>
{`
* Multi-column sorting (external contribution)
`}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1} textColor="tertiary">
              0.12.0 - 22.03.2016
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Main Improvements
            </Heading>
            <Markdown>
{`
* Wrote changelog (better late than never)
* Bumped lodash minimum version to 4.0 (new API) and fixed the imports
`}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1} textColor="tertiary">
              0.13.0 - 07.06.2016
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Main Improvements
            </Heading>
            <Markdown>
{`
* Support multiple search filters (external contribution)
`}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1} textColor="tertiary">
              0.14.0 - 09.06.2016
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Main Improvements
            </Heading>
            <Markdown>
{`
* Force row key to be set
* Dropped certain heavy dependencies (react/lib/update, lodash/merge)
`}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1} textColor="tertiary">
              1.0.0 - 25.06.2016
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Main Improvements
            </Heading>
            <Markdown>
{`
* Almost complete rewrite sponsored by [Kenandy Inc.](http://www.kenandy.com/)
* Rewrote documentation using [Catalog](https://interactivethings.github.io/catalog/)
* Cleaned up core design - rows, column definition, React definition
* Monorepo using [Lerna](https://lernajs.io/) and split to eight packages
* READMEs are aggregated as runnable documentation
* Started driving development through examples based on client needs (drag and drop, etc.)
`}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1} textColor="tertiary">
              2.0.0 - 16.08.2016
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Main Improvements
            </Heading>
            <Markdown>
{`
* 17(!) packages now
* Extracted [react-edit](https://www.npmjs.org/package/react-edit). Might go to a repository of its own later.
* Drag and drop helpers, tree helpers, search helpers, whatnot
* [reactabular-easy](https://www.npmjs.com/package/reactabular-easy) - Opinionated wrapper that loses some flexibility, but is easier to use (no need to glue parts together)
`}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition} bgColor="white" notes="">
            <CodePane
              lang="jsx"
              source={require("raw!../examples/reactabular_01.js")}
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="white" notes="">
            <CodePane
              lang="jsx"
              source={require("raw!../examples/reactabular_06.jsx")}
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="white" notes="">
            <CodePane
              lang="jsx"
              source={require("raw!../examples/reactabular_07.jsx")}
            />
          </Slide>


          <Slide transition={slideTransition}>
            <Heading caps fit size={1} textColor="tertiary">
              3.0.0 - 01.09.2016
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Main Improvements
            </Heading>
            <Markdown>
{`
* Virtualization (performance!), [reactabular-virtualized](https://www.npmjs.com/package/reactabular-virtualized)
* Minor API tweaks (onRow signature)
* Integrated virtualization and tree functionality to reactabular-easy
`}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Next Steps
            </Heading>
            <Markdown>
{`
* Improve tree abstraction further (now just utilities)
* Add missing tests (unit, acceptance, property based tests)
* Move **react-edit** to a repository of its own and make it more useful standalone
`}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1} textColor="tertiary">
              Development Model
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Example Driven
            </Heading>
            <Markdown>
{`
* Examples are grown into packages &rarr; becomes a new README
* As the package idea is solid, unit tests are written to support the functionality
* [![codecov](https://codecov.io/gh/reactabular/reactabular/branch/master/graph/badge.svg)](https://codecov.io/gh/reactabular/reactabular) shows what to improve
* Ideally there would be acceptance tests against examples
`}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Lerna Briefly
            </Heading>
            <Markdown>
{`
* [Lerna](https://lernajs.io/) is a tool for managing multiple packages
* Expects a *packages* directory
* **lerna bootstrap** - Install dependencies of all packages
* **lerna publish** - Update and publish packages that have changed
* **lerna run** - Run a script on each package (say, a build script)
* Two versioning modes: fixed (think Babel) and independent
* It would be good to have a [hybrid mode](https://github.com/lerna/lerna/issues/298) to enable incubation
`}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              The Good
            </Heading>
            <Markdown>
{`
* Monorepo avoids configuration overhead (packaging, testing)
* One repository to maintain over many - Alternative: consume configuration as a dependency
* Easier to author packages &rarr; you make more packages
* Leads to decoupled design - Logic separate from React
* Possible to write integration tests
`}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              The Bad
            </Heading>
            <Markdown>
{`
* Monorepos aren't fully understood &rarr; Tooling not stable yet
* If you aren't careful, the repository can become huge (see Babel)
* Due to npm bug, manual releases are still needed &rarr; **lerna publish --skip-npm**
* Harder to contribute due to the exotic setup?
`}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              The Ugly
            </Heading>
            <Markdown>
{`
* Single issue tracker, potentially harder to manage
* No automated releases yet. Ideal: tag &rarr; CI releases for you
* Changelog management is rough. Tooling might appear.
* Hard to collaborate if your monorepo is private and you want to contract
* Git log can become rather large
`}
            </Markdown>
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
