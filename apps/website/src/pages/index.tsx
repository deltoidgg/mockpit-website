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

const sourceKinds: { kind: string; variant: string }[] = [
  { kind: "api", variant: "api" },
  { kind: "mock", variant: "mock" },
  { kind: "fallback", variant: "fallback" },
  { kind: "derived", variant: "derived" },
  { kind: "hardcoded", variant: "hardcoded" },
  { kind: "empty", variant: "empty" },
  { kind: "unsupported", variant: "unsupported" },
  { kind: "error", variant: "error" },
];

const features = [
  "Free & open source",
  "Framework neutral",
  "Zero config start",
  "Shadow DOM devtools",
  "CLI audits",
  "Tiny footprint",
];

export default function Home() {
  return (
    <Layout
      title="Runtime provenance devtools"
      description="MockPit shows what each prototype screen is made of right now."
    >
      <main>
        {/* ── Hero ── */}
        <section className="hero hero--mockpit">
          <div className="container hero__grid">
            <div className="hero__copy">
              <p className="eyebrow">prototype-driven development</p>
              <Heading as="h1" className="hero__title">
                MockPit
              </Heading>
              <p className="hero__subtitle">
                Runtime provenance devtools that show what this screen is made of right now:
                live&nbsp;APIs, mocks, fallbacks, hardcoded copy, derived values, empty responses,
                and errors.
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
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* ── Features row ── */}
        <section className="section section--quiet">
          <div className="container">
            <div className="features-row">
              {features.map((label) => (
                <div className="feature-item" key={label}>
                  <span className="feature-item__label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Core question ── */}
        <section className="section">
          <div className="container split">
            <div>
              <p className="eyebrow">the core question</p>
              <Heading as="h2">What is real enough to trust?</Heading>
            </div>
            <p className="lead">
              MockPit helps teams prototype quickly while keeping a visible audit trail of the data
              sources behind each route. Use it while building UI with live services, MSW handlers,
              fixture fallbacks, AI&#8209;generated copy, and local derivations.
            </p>
          </div>
        </section>

        {/* ── Choose a path ── */}
        <section className="section section--quiet">
          <div className="container">
            <div className="section__heading">
              <p className="eyebrow">choose a path</p>
              <Heading as="h2">Start with the integration you use today.</Heading>
            </div>
            <div className="fast-paths">
              {fastPaths.map((path) => (
                <a className="fast-path" href={path.href} key={path.title}>
                  <span className="fast-path__title">{path.title}</span>
                  <p className="fast-path__desc">{path.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Source taxonomy ── */}
        <section className="section section--ink">
          <div className="container taxonomy">
            <div>
              <p className="eyebrow">source taxonomy</p>
              <Heading as="h2">One shared vocabulary for prototype evidence.</Heading>
            </div>
            <div className="source-grid">
              {sourceKinds.map(({ kind, variant }) => (
                <span className={clsx("source-chip", `source-chip--${variant}`)} key={kind}>
                  {kind}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section section--cta">
          <div className="container">
            <p className="eyebrow">ready to start?</p>
            <Heading as="h2">Ship prototypes you can explain.</Heading>
            <p>
              Add MockPit to your project in under five minutes. No config needed to get started.
            </p>
            <div>
              <a className="button button--primary button--lg" href="/docs/quick-start">
                Quick start
              </a>
              <a className="button button--secondary button--lg" href="/docs/intro">
                Read the docs
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
