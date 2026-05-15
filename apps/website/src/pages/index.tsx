import clsx from "clsx";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";

const fastPaths = [
  {
    title: "Vanilla",
    description:
      "Create a client, mount the Shadow DOM devtools, and instrument fetches without framework glue.",
    href: "/docs/quick-start",
  },
  {
    title: "React",
    description:
      "Wrap your app with MockPitProvider, then use hooks, AuditMark, AuditSection, and MockPitDevtools.",
    href: "/docs/react",
  },
  {
    title: "MSW",
    description:
      "Decorate MSW handlers so mock transport, critical route gaps, and cleanup state are visible.",
    href: "/docs/msw",
  },
];

const sourceKinds = [
  "api",
  "mock",
  "fallback",
  "derived",
  "hardcoded",
  "empty",
  "unsupported",
  "error",
];

export default function Home() {
  return (
    <Layout
      title="Runtime provenance devtools"
      description="MockPit shows what each prototype screen is made of right now."
    >
      <main>
        <section className="hero hero--mockpit">
          <div className="container hero__grid">
            <div className="hero__copy">
              <p className="eyebrow">Prototype-driven development without source confusion</p>
              <Heading as="h1" className="hero__title">
                MockPit
              </Heading>
              <p className="hero__subtitle">
                Runtime provenance devtools that show what this screen is made of right now: live
                APIs, mocks, fallbacks, hardcoded copy, derived values, empty responses, unsupported
                capabilities, and errors.
              </p>
              <div className="hero__actions">
                <a className="button button--primary button--lg" href="/docs/intro">
                  Get started
                </a>
                <a className="button button--secondary button--lg" href="/docs/examples">
                  View examples
                </a>
              </div>
            </div>
            <div className="product-shot" aria-label="MockPit devtools preview">
              <img
                src="/img/mockpit-devtools-card.png"
                alt="MockPit devtools panel showing mode, route, source mix, capture status, and resource records"
              />
            </div>
          </div>
        </section>

        <section className="section section--quiet">
          <div className="container split">
            <div>
              <p className="eyebrow">The core question</p>
              <Heading as="h2">What is real enough to trust?</Heading>
            </div>
            <p className="lead">
              MockPit helps teams prototype quickly while keeping a visible audit trail of the data
              sources behind each route. Use it while building UI with live services, MSW handlers,
              fixture fallbacks, AI-generated copy, and local derivations.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__heading">
              <p className="eyebrow">Choose a path</p>
              <Heading as="h2">Start with the integration you use today.</Heading>
            </div>
            <div className="fast-paths">
              {fastPaths.map((path) => (
                <a className="fast-path" href={path.href} key={path.title}>
                  <span>{path.title}</span>
                  <p>{path.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--ink">
          <div className="container taxonomy">
            <div>
              <p className="eyebrow">Source taxonomy</p>
              <Heading as="h2">One shared vocabulary for prototype evidence.</Heading>
            </div>
            <div className="source-grid">
              {sourceKinds.map((kind) => (
                <span className={clsx("source-chip", `source-chip--${kind}`)} key={kind}>
                  {kind}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
