import * as Lucide from 'lucide-react'

import Link from 'next/link'

export default function Page() {
  const projects = [
    {
      name: 'Monorepo',
      description: 'Standardized boilerplate for building new projects',
      link: 'https://github.com/zero-one-group/monorepo',
      tags: ['TypeScript', 'React', 'Node.js', 'Golang'],
    },
    {
      name: 'ZOG UI',
      description: 'UI library inspired from shadcn/ui',
      link: 'https://github.com/zero-one-group/zog-ui',
      tags: ['React', 'Tailwind', 'Components'],
    },
    {
      name: 'fxl.js',
      description: 'Data-oriented JavaScript spreadsheet library',
      link: 'https://github.com/zero-one-group/fxl.js',
      tags: ['JavaScript', 'Data', 'Spreadsheet'],
    },
    {
      name: 'geni',
      description: 'Clojure dataframe library that runs on Spark',
      link: 'https://github.com/zero-one-group/geni',
      tags: ['Clojure', 'Spark', 'Data'],
    },
  ]

  const contributionSteps = [
    {
      title: 'Explore Projects',
      description: 'Check out the repositories in our organization',
    },
    {
      title: 'Report Issues',
      description: 'Found a bug or have a feature request? Open an issue',
    },
    {
      title: 'Submit PRs',
      description: 'Improve our code by submitting a pull request',
    },
    {
      title: 'Join Community',
      description: 'Connect with other developers and share ideas',
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background dengan gradient dan pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-fd-background via-fd-background to-fd-muted">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="space-y-8 text-center">
            {/* Highlight Badge */}
            <div className="flex justify-center">
              <a
                href="https://github.com/zero-one-group"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-muted px-4 py-2 transition-colors hover:border-fd-primary"
              >
                <Lucide.Github size={16} />
                <span>Check our GitHub</span>
                <Lucide.Star className="text-yellow-500" size={16} />
              </a>
            </div>

            {/* Main Heading */}
            <h1 className="mx-auto max-w-3xl font-bold text-4xl leading-tight md:text-6xl">
              Building the Future Through{' '}
              <span className="bg-gradient-to-r from-fd-primary to-fd-primary/70 bg-clip-text text-transparent">
                Open Source
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto max-w-2xl text-fd-muted-foreground text-lg md:text-xl">
              We actively participate in the community by sharing knowledge, contributing code, and
              supporting the development of impactful projects.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col justify-center gap-4 py-4 sm:flex-row">
              <Link
                href="/docs"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-fd-primary px-8 py-4 font-semibold text-fd-primary-foreground transition-opacity hover:opacity-90"
              >
                View Documentation
                <Lucide.ArrowRight size={18} />
              </Link>
              <a
                href="https://github.com/zero-one-group"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-fd-border bg-fd-background px-8 py-4 font-semibold transition-colors hover:bg-fd-muted"
              >
                <Lucide.Github size={18} />
                Star on GitHub
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-12 md:grid-cols-4">
              {[
                { label: 'Open Source Projects', value: '10+' },
                { label: 'GitHub Stars', value: '1000+' },
                { label: 'Contributors', value: '50+' },
                { label: 'Countries Reached', value: '20+' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-bold text-2xl md:text-3xl">{stat.value}</div>
                  <div className="mt-1 text-fd-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Revamped */}
      <section className="bg-fd-background px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-4xl">Our Open Source Projects</h2>
            <p className="mx-auto max-w-2xl text-fd-muted-foreground">
              We actively maintain and contribute to several open source projects, helping
              developers build better software faster.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-fd-border bg-fd-card p-8 transition hover:border-fd-primary"
              >
                <h3 className="mb-3 font-bold text-2xl group-hover:text-fd-primary">
                  {project.name}
                </h3>
                <p className="mb-4 text-fd-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-fd-muted px-3 py-1 font-medium text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section - Revamped */}
      <section className="bg-fd-muted px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-4xl">Get Involved</h2>
            <p className="mx-auto max-w-2xl text-fd-muted-foreground">
              Join our thriving open source community and help us build the future of technology.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contributionSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative rounded-xl border border-fd-border bg-fd-card p-6"
              >
                <div className="-top-4 -left-4 absolute flex h-8 w-8 items-center justify-center rounded-full bg-fd-primary font-bold text-fd-primary-foreground">
                  {index + 1}
                </div>
                <h3 className="mb-3 font-bold text-xl">{step.title}</h3>
                <p className="text-fd-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/docs/contributing"
              className="inline-block rounded-lg bg-fd-primary px-8 py-4 font-semibold text-fd-primary-foreground transition hover:opacity-90"
            >
              Read Contributing Guidelines
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-fd-border border-t bg-fd-background px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h4 className="mb-4 font-bold text-lg">Zero One Group</h4>
              <p className="text-fd-muted-foreground">
                Your Trusted Digital Transformation Partner.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-lg">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/docs" className="text-fd-muted-foreground hover:text-fd-foreground">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/contributing"
                    className="text-fd-muted-foreground hover:text-fd-foreground"
                  >
                    Contributing
                  </Link>
                </li>
                <li>
                  <a
                    href="https://github.com/zero-one-group"
                    className="text-fd-muted-foreground hover:text-fd-foreground"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-lg">Community</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.zero-one-group.com"
                    className="text-fd-muted-foreground hover:text-fd-foreground"
                  >
                    Website
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/zero_one_group"
                    className="text-fd-muted-foreground hover:text-fd-foreground"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-lg">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/zero-one-group"
                  className="text-fd-muted-foreground hover:text-fd-foreground"
                >
                  <Lucide.Github size={24} />
                </a>
                <a
                  href="https://twitter.com/zero_one_group"
                  className="text-fd-muted-foreground hover:text-fd-foreground"
                >
                  <Lucide.Twitter size={24} />
                </a>
                <a
                  href="https://www.zero-one-group.com"
                  className="text-fd-muted-foreground hover:text-fd-foreground"
                >
                  <Lucide.Globe size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-fd-border border-t pt-8 text-center text-fd-muted-foreground">
            <p>© {new Date().getFullYear()} Zero One Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
