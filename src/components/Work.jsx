/*
 * Logo source URLs:
 * - rm.png        (reMarkable):           https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRojclS9w5bmej-QWVx2YK_4qzYPFo-GsB2CA&s
 * - s.jpeg        (Slalom):               https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7y3j-vH0IMqE5f9flHrTO0IErfHkhyTL0Xw&s
 * - dot.webp      (Polkadot DOT):         https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/vectors/dot-8yiy2uau0huqobvsltt8z8.png/dot-fhgjfsmbfq7gskr973eofc.png?_a=DATAiZAAZAA0
 * - web3-logo.png (Web3 Foundation):      https://cryptojobslist.com/jobs/head-of-research-at-web3-foundation-zug-switzerland
 * - manifold.png  (Manifold):             https://www.globenewswire.com/NewsRoom/AttachmentNg/aade3bcf-ef11-4593-98cc-14752c8a3102
 * - dal-logo.png  (Dalhousie University): https://www.dal.ca/content/dam/www/cmc-content-admin/brand/dal-logo-horizontal-colour.png.lt_858a77bd5c6784989b19b6cf05366bf8.res/dal-logo-horizontal-colour.png
 * - clc.png       (Canada Learning Code): https://stemminds.com/wp-content/uploads/2018/05/clc.html
 * - lrf.jpeg      (Little Robot Friends): https://www.linkedin.com/company/little-robot-friends/?originalSubdomain=ca
 */

import React, { useEffect, useRef, useState } from "react";
import polkadot from "../img/dot.webp";
import web3 from "../img/web3-logo.png";
import manifold from "../img/manifold.png";
import clc from "../img/clc.png";
import lrf from "../img/lrf.jpeg";
import dal from "../img/dal-logo.png";
import slalom from "../img/s.jpeg";
import rm from "../img/rm.png";

const ROLES = [
  {
    id: 1,
    title: "Salesforce",
    where: "Based in Oslo, Norway 🇳🇴 and Toronto, Canada 🇨🇦",
    stack:
      "Apex, JavaScript, Lightning Web Components (LWC), Flows, REST APIs.",
    logos: [
      { src: rm, alt: "reMarkable" },
      { src: slalom, alt: "Slalom" },
    ],
    detail: (
      <>
        <p>
          While living in Toronto, Canada, I worked at{" "}
          <a
            href="https://www.slalom.com/us/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Slalom Consulting
          </a>{" "}
          for over 3 years as a Salesforce Developer Consultant. During my time
          at
          Slalom, I collaborated with other developers on client projects and
          also served as the sole developer on several team initiatives.
          As a Salesforce Developer, I built out complex solutions using
          Apex, REST API Web Services, Lightning Web Components, Flows in various clouds
          including Experience Cloud, Financial Services Cloud, Non-Profit
          Cloud, and Service Cloud.
        </p>
        <p>
          I started at{" "}
          <a
            href="https://remarkable.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reMarkable
          </a>{" "}
          in May 2025, after moving across the Atlantic
          Ocean to Oslo, Norway. Joining the CRM Team as a Salesforce Developer
          has allowed me to work across Salesforce Core, Experience Cloud,
          Service Cloud, and parts of Marketing Cloud and Data Cloud. I use
          Apex, LWC, JavaScript, and Flows on a daily basis.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Crypto & Blockchain",
    where: "Based in Zug, Switzerland 🇨🇭",
    stack:
      "Vue-JS, React, some Rust, JavaScript, Technical Writing, Technical Speaking.",
    logos: [
      { src: polkadot, alt: "Polkadot" },
      { src: web3, alt: "Web3" },
    ],
    detail: (
      <>
        <p>
          During my time as a Technical Educator Intern at{" "}
          <a
            href="https://web3.foundation/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web3 Foundation
          </a>
          , I was engaged in creating tutorials for blockchain developers,
          hosting{" "}
          <a
            href="https://www.crowdcast.io/e/testing-rococo-parachain"
            target="_blank"
            rel="noopener noreferrer"
          >
            technical webinars
          </a>{" "}
          on cryptocurrency, and practicing my technical writing skills on
          their{" "}
          <a href="https://medium.com/web3foundation/tech-and-research-update-june-f82d6287974f">
            Medium blog
          </a>{" "}
          and on their{" "}
          <a href="https://wiki.polkadot.com/general/contributors/#kirsten-richard">
            Polkadot Wiki.
          </a>{" "}
          Through this position, I also worked with other crypto platforms,
          worked with Rust and React, and created a number of{" "}
          <a href="https://www.youtube.com/playlist?list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8">
            Youtube Technical Explainer videos
          </a>{" "}
          for the Polkadot Blockchain Developer Community. I also got to
          utilize my artistic skills and put together an animation that
          explained how Cross-Chain Message Passing (XCMP)
          worked between parachains on the Polkadot Blockchain.
        </p>
        <p>
          This opportunity kicked off my passion for decentralization,
          blockchain technologies, and cryptocurrency.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Front-end Development",
    where: "Based in Halifax, Canada 🇨🇦",
    stack:
      "React, Vue-JS, PHP, SQL, Node-JS, JavaScript, HTML, CSS, Gatsby-JS, Kubernetes, some Ruby on Rails, Technical Teaching, Public Speaking, Leadership, Technical Writing.",
    logos: [
      { src: manifold, alt: "Manifold" },
      { src: dal, alt: "Dalhousie" },
    ],
    detail: (
      <>
        <p>
          Throughout the past four years, I have held various front-end/web
          development positions. One of them being a Head Teaching Assistant
          (TA) for Web Design &amp; Development and Server Side Scripting at{" "}
          <a
            href="https://www.dal.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dalhousie University
          </a>
          . During this role, I managed the TA team (of
          about 20+ TA's) and taught to many students. Through this position, I
          was able to communicate in a technical and understanding manner and
          effectively explain topics in the course's material.
        </p>
        <p>
          While I was a Junior Software Developer at{" "}
          <a
            href="https://snyk.io/manifold/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Manifold
          </a>
          , I worked in both
          front-end and back-end in the company. I focused on utilizing React
          to build and fix components on their main website. I also used to
          write blogs about Kubernetes on their{" "}
          <a href="https://kubelist.com/">Kubelist.</a> In the back-end, I was
          using Docker and Kubernetes to test containers.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "Developer Relations",
    where: "Based in Toronto, Canada 🇨🇦",
    stack:
      "HTML, CSS, C, Arduino, Technical Teaching, Public Speaking, Technical Writing.",
    logos: [
      { src: clc, alt: "Canada Learning Code" },
      { src: lrf, alt: "Little Robot Friends" },
    ],
    detail: (
      <>
        <p>
          Since 2018, I've worked on many DevRel opportunities. Including
          technical writing and speaking about coding at
          a few Tech events in Toronto.
        </p>
        <p>
          At{" "}
          <a
            href="https://www.canadalearningcode.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Canada Learning Code
          </a>
          , I was a Learner Experience Coordinator;
          ensuring the students aged 6-14 were understanding the technical
          material and teaching them in weekly classes. The material myself and
          my team taught covered website building, game development, and design
          practices.
        </p>
        <p>
          At{" "}
          <a
            href="https://littlerobotfriends.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Little Robot Friends
          </a>
          , I was a Digital Marketing Developer, writing
          technical blog posts and educating the public at tech events on
          Arduino, C, and how to code with robots. Some of my articles can be
          found{" "}
          <a href="https://littlerobotfriends.com/blogs/stories">
            here on their website.
          </a>
        </p>
      </>
    ),
  },
];

function Role({ role }) {
  const [open, setOpen] = useState(false);
  return (
    <section className="role">
      <div className={`role-inner${open ? " detail-open" : ""}`}>
        <div className="logo-col">
          <div className="role-logos logo-stack">
            {role.logos.map((logo) => (
              <img key={logo.alt} src={logo.src} alt={logo.alt} />
            ))}
          </div>
          <div className={`role-detail-drawer${open ? " open" : ""}`}>
            <div className="role-detail-inner">{role.detail}</div>
          </div>
        </div>
        <div className="role-right">
          <h2 className="role-title">{role.title}</h2>
          <p className="role-where">{role.where}</p>
          <p className="role-stack">
            <b>Languages &amp; Skills used:</b> {role.stack}
          </p>
          <button
            type="button"
            className={`more-btn${open ? " is-open" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
          >
            {open ? "Hide details" : "Click for more details"}
            <span className="chev">↓</span>
          </button>
          <div className={`role-detail-drawer${open ? " open" : ""}`}>
            <div className="role-detail-inner">{role.detail}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Work() {
  const workRef = useRef(null);
  const indicatorRef = useRef(null);

  useEffect(() => {
    const work = workRef.current;
    const indicator = indicatorRef.current;
    if (!work || !indicator) return;

    let frame = 0;
    const update = () => {
      const rect = work.getBoundingClientRect();
      const center = window.innerHeight / 2;
      const progress = Math.max(
        0,
        Math.min(1, (center - rect.top) / rect.height),
      );
      indicator.style.top = progress * rect.height + "px";
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="work" ref={workRef}>
      <div className="work-indicator" ref={indicatorRef} />
      {ROLES.map((role) => (
        <Role key={role.id} role={role} />
      ))}
    </section>
  );
}
