import classNames from "classnames";

import { Experiences } from "@components";

import style from "./style.module.css";
import section from "../section.module.css";

export function Experience() {
  return (
    <div className={classNames(section.container, style.container)}>
      <h2 className="title stop">Experience</h2>


      <Experiences>
        <Experiences.Experience
          from="2022" to="Present"
          company="ScreenCloud"
          role="Staff Software Engineer"
          location="London, UK"
        >
          <p>Upon returning to the UK in 2022, I resumed my role as a Staff Software Engineer at ScreenCloud, By this time, I had already developed the entire billing system for the product and continued to maintain and expand its capabilities.</p>
          <p>As part of my responsibilities, I constructed all the necessary UI components to facilitate credit card collection through Stripe, enabling customers to make payments via PayPal and Direct Debit. Additionally, I implemented enterprise-level offline invoicing payments, leveraging the functionality provided by Chargebee, our subscription management system. Moreover, I conducted thorough research and proof-of-concepts for a potential partnership with Microsoft, exploring the integration of our product into the Azure marketplace.</p>
          <p>Throughout my tenure, I spearheaded the development of the comprehensive billing system and collaborated closely with customer support, customer success, finance, and marketing teams to address any billing-related matters. As part of our growth, we formed a dedicated billing team, in which I served as a staff engineer and actively mentored fellow engineers.</p>
          <p>Throughout my journey at ScreenCloud, I have consistently been respected as a mentor and resource for both junior and senior engineers, providing technical expertise and contributing to the overall product development.</p>
        </Experiences.Experience>
        <Experiences.Experience
          from="2018" to="2022"
          company="ScreenCloud"
          role="Staff Software Engineer"
          location="Bangkok, Thailand"
        >
          <p>During my continued tenure at ScreenCloud, I relocated to the Asia office in Bangkok, Thailand in 2018. From 2018 until 2022, I played a crucial role in the development of a brand-new product, contributing significantly to its creation from the ground up.</p>
          <p>At this time, ScreenCloud embarked on a major undertaking to rebuild the entire CMS product, initially named "Next" and later renamed "Studio," which is still in use today. I took on the challenge of working on various services and user interfaces within the new system, often working independently or collaboratively with other engineers.</p>
          <p>Notably, I led the development of a comprehensive backend service utilising GraphQL and Postgraphile, leveraging the power of node and TypeScript. This service effectively communicated with PostgreSQL, ensuring efficient data management and retrieval.</p>
          <p>In addition, I played a key role in the design and implementation of the new TypeScript-based frontend CMS. This redesigned interface seamlessly communicated with the backend service and players, delivering an enhanced user experience.</p>
          <p>Furthermore, I pioneered the development of the authentication frontend and backend services, tightly integrated with Auth0. This robust authentication system facilitated secure access through various methods, including email and password, Google and LinkedIn login, as well as support for numerous Single Sign-On (SSO) providers such as Azure, Okta, and SAML.</p>
          <p>Throughout my time at ScreenCloud, I remained at the forefront of technological advancements, driving innovation in the development of the brand-new product and ensuring secure and user-friendly experiences for our clients.</p>
        </Experiences.Experience>
        <Experiences.Experience
          from="2016" to="2018"
          company="ScreenCloud"
          role="Senior Software Engineer"
          location="London, UK"
        >
          <p>During my tenure as a Senior Software Engineer at ScreenCloud, a pioneering digital signage SaaS company based in London from 2016 to 2018, I played a pivotal role in developing cutting-edge solutions in the cloud-based digital signage industry.</p>
          <p>At ScreenCloud, we revolutionised the digital signage landscape by offering a comprehensive cloud-based solution. As part of my role, I focused on multiple key areas. Firstly, I spearheaded the development of the front-facing marketing website, screencloud.com, ensuring an engaging and user-friendly online presence.</p>
          <p>Additionally, I made significant contributions to the signage CMS product, both on the front and back end. Working with technologies such as PHP Laravel and Node.js with Express.js, I leveraged my expertise to enhance the functionality and performance of the CMS. Moreover, I played a pivotal role in rebuilding the billing infrastructure, streamlining the payment processes for improved customer experience. As part of this effort, I built an entire bookkeeping solution that effectively fed all our important billing data into Xero and reconciled invoices.</p>
          <p>Recognising the importance of partnerships and reseller programs, I took the initiative to create a comprehensive resellers and partnerships program. This strategic initiative enabled ScreenCloud to expand its reach and forge valuable collaborations in the digital signage ecosystem.</p>
          <p>Throughout my time at ScreenCloud, I showcased my proficiency in a range of technologies, including Laravel, Node.js, Express.js, and React, ensuring the seamless integration of frontend and backend components to deliver outstanding digital signage solutions.</p>
        </Experiences.Experience>
        <Experiences.Experience
          from="2016" to="2016"
          company="Thin Martian"
          role="Senior Web Developer"
          location="London, UK"
        >
          <p>At Thin Martian, I served as a Senior Web Developer, collaborating with many different clients, I played a pivotal role in delivering cutting-edge web solutions.</p>
          <p>One of my notable contributions was the development of a bespoke PHP Laravel CMS. This unique CMS utilised a simple YAML definition file to generate entire CMS modules, streamlining the backend development process for various websites created at Thin Martian.</p>
          <p>Furthermore, I had the opportunity to explore emerging frontend technologies. At Thin Martian, I initially utilised Vue.js to build dynamic frontend applications. As the industry evolved, we transitioned to the powerful React framework. Leveraging React, our team successfully delivered complex and interactive frontend applications, pushing the boundaries of user experience.</p>
          <p>Throughout my time at Thin Martian, I remained dedicated to delivering innovative web solutions, adapting to new technologies, and enhancing the overall development process.</p>
        </Experiences.Experience>
        <Experiences.Experience
          from="2005" to="2016"
          company="Codegent"
          role="Senior Web Developer"
          location="London, UK"
        >
          <p>At Codegent, a leading web agency based in London, I served as a Senior Web Developer from 2005 to 2016. Working with a diverse range of clients, including renowned names such as Disney, AMEX, Timeout, Microsoft, and Sketchers, I played a pivotal role in delivering exceptional web solutions.</p>
          <p>As a full stack developer, I expertly crafted bespoke content management systems (CMS) in ColdFusion, PHP CodeIgniter, and PHP Laravel. These CMS platforms were deployed company-wide, catering to the unique requirements of numerous clients. Leveraging my proficiency in MySQL and Oracle, I ensured efficient data management and integration. Beyond development, I actively contributed to devops activities and provided support in maintaining our dedicated Red Hat servers.</p>
          <p>My standout accomplishment to spearhead the creation of international Skechers websites, excluding the US site. This monumental task involved single-handedly building frontend applications in multiple languages and architecting a custom CMS. The CMS seamlessly processed the global Skechers catalog, enabling product storage and dynamic output alongside multilingual translations, including Japanese and Chinese.</p>
          <p>Throughout my tenure at Codegent, I consistently embraced diverse challenges, leaving an indelible mark through my technical expertise and innovative problem-solving.</p>
        </Experiences.Experience>
        <Experiences.Experience
          from="2000" to="2005"
          company="Reading Room"
          role="Web Developer"
          location="London, UK"
        >
          <p>During my tenure as a Web Developer at Reading Room, a prominent London-based agency, I collaborated with diverse clients from various industries. Notably, I worked with esteemed organisations such as Cancer Research UK, British Library, and BBC.</p>
          <p>My responsibilities involved frontend development using HTML and CSS (during CSS's early stages), as well as backend work with custom-built ColdFusion-based content management systems (CMSs) that I personally created.</p>
          <p>I worked extensively with databases such as MySQL, Oracle, and SQL Server, ensuring seamless integration between frontend and backend components. This experience honed my skills in delivering high-quality web solutions to meet client-specific requirements.</p>
        </Experiences.Experience>
        <Experiences.Experience
          from="1999" to="2000"
          company="Datadial Ltd"
          role="Junior Web Developer"
          location="London, UK"
        >
          <p>Successfully developed and maintained production-ready code for client websites spanning diverse industries.</p>
          <p>During that period, I crafted websites using pure HTML and JavaScript, as CSS was a nascent technology with limited support from mainstream browsers at the time.</p>
        </Experiences.Experience>
      </Experiences>



    </div>
  );
}
