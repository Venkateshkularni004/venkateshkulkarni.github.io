import classNames from "classnames";

import { Grid } from "@components";

import style from "./style.module.css";
import section from "../section.module.css";

export function Skills() {
  return (
    <div className={classNames(section.container, style.container)}>
      <h2 className="title stop">Skills</h2>
      <Grid>
        <Grid.Row>
          <Grid.Column className={style.category}>
            <h3 className="stop">Languages</h3>
            <ul>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>JavaScript</li>
              <li>GraphQL</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>PHP</li>
              <li>ColdFusion</li>
              <li>Sass</li>
              <li>Less</li>
              <li>Stylus</li>
            </ul>
          </Grid.Column>
          <Grid.Column className={style.category}>
            <h3 className="stop">Frameworks</h3>
            <ul>
              <li>Express</li>
              <li>Fastify</li>
              <li>LoopBack</li>
              <li>Nest.js</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Gatesby</li>
              <li>Vue.js</li>
              <li>Postgraphile</li>
              <li>Apollo GraphQL</li>
              <li>Prisma</li>
              <li>TypeORM</li>
              <li>Bookshelf</li>
              <li>Redux</li>
              <li className="muted">+ More</li>
            </ul>
          </Grid.Column>
          <Grid.Column className={style.category}>
            <h3 className="stop">Testing</h3>
            <ul>
              <li>Vitest</li>
              <li>Jest</li>
              <li>React Testing Library</li>
              <li>Enzyme</li>
              <li>Cypress</li>
              <li>Mocha</li>
              <li>Chai</li>
            </ul>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column className={style.category}>
            <h3 className="stop">Databases</h3>
            <ul>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>MariaDB</li>
              <li>Oracle</li>
              <li>Aurora</li>
              <li>MongoDB</li>
              <li>Redis</li>
            </ul>
          </Grid.Column>
          <Grid.Column className={style.category}>
            <h3 className="stop">CI/CD</h3>
            <ul>
              <li>GitHub Actions</li>
              <li>Travis</li>
            </ul>
          </Grid.Column>
          <Grid.Column className={style.category}>
            <h3 className="stop">Tools &amp; Platforms</h3>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>Amazon AWS</li>
              <li>Microsoft Azure</li>
              <li>Auth0</li>
              <li>Vercel</li>
              <li>Netlify</li>
              <li>Firebase</li>
              <li>Docker</li>
              <li>Vagrant</li>
              <li>Storybook</li>
              <li>Figma</li>
              <li>Sketch</li>
              <li>Photoshop</li>
              <li className="muted">+ More</li>
            </ul>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
