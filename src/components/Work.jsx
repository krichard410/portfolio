import React, { Component } from "react";
import polkadot from "../img/polkadot-coin.png";
import web3 from "../img/web3-logo.png";
import manifold from "../img/manifold.png";
import clc from "../img/clc.png";
import lrf from "../img/lrf.jpeg";
import dal from "../img/dal.png";

class Work extends Component {
  state = {
    isActive: false,
    id: 0,
  };

  handleShow = () => {
    this.setState({ isActive: true });
  };

  handleHide = () => {
    this.setState({ isActive: false });
  };

  render() {
    return (
      <div class="container-fluid workContainer">
        {/*/ Container 1 */}
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-5 crypto">
              {/* Polkadot img src: https://iconduck.com/icons/83014/polkadot-cryptocurrency*/}
              <img
                src={polkadot}
                class="img-fluid rounded-start"
                alt="polkadot"
              />
              {/* Web3 img src: https://cryptojobslist.com/jobs/head-of-research-at-web3-foundation-zug-switzerland*/}
              <img src={web3} class="img-fluid rounded-start" alt="web3" />
            </div>
            <div class="col-md-7">
              <div class="card-body">
                <h3 class="card-title">Crypto &amp; Blockchain</h3>
                <p class="card-text">
                  Languages &amp; Skills used: Vue-JS, React, some Rust,
                  JavaScript, Technical Writing, Technical Speaking.<br/>Based in Zug, Switzerland
                </p>
                <p class="card-text">
                  <small class="text-muted">
                    <button
                      class="click-for-more"
                      onClick={() => this.setState({ show: "true", id: 1 })}
                    >
                      <span class="Special-Text">Click for more details</span>
                    </button>
                  </small>
                </p>
              </div>
            </div>
          </div>
          {this.state.show === "true" && this.state.id === 1 ? (
            <div>
              <div
                class="card-body fadeIn"
                style={{ marginTop: "20px", marginBottom: "20px" }}
              >
                During my time as a Technical Educator Intern at Web3
                Foundation, I was engaged in creating tutorials for blockchain
                developers{" "}
                <a href="https://dotleap.com/building-and-address-converter-page-polkadot/">
                  (like this one)
                </a>
                , hosting technical webinars on cryptocurrency{" "}
                <a href="https://www.crowdcast.io/e/testing-rococo-parachain">
                  (can be found here)
                </a>
                , and practicing my technical writing skills on their{" "}
                <a href="https://medium.com/web3foundation/tech-and-research-update-june-f82d6287974f">
                  Medium blog
                </a>{" "}
                and on their{" "}
                <a href="https://wiki.polkadot.network/">Polkadot Wiki.</a>{" "}
                Through this position, I also worked with other crypto
                platforms, worked with Rust and React, and created a number of{" "}
                <a href="https://www.youtube.com/playlist?list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8">
                  Youtube Technical Explainer videos
                </a>{" "}
                for the Polkadot Blockchain Developer Community. I also got to
                utilize my artistic skills and put together an animation,
                featured{" "}
                <a href="https://wiki.polkadot.network/docs/learn-crosschain">
                  here
                </a>{" "}
                on their Wiki, that explains how XCMP or Cross-Chain Message
                Passing works on the Polkadot Blockchain between parachains.
                <br />
                <br /> This opportunity kicked off my passion for decentralization,
                blockchain technologies, and cryptocurrency. 
              </div>
            </div>
          ) : null}
        </div>
        {/*/ Container 2 */}
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-5 crypto">
              {/* Manifold img src: https://www.globenewswire.com/NewsRoom/AttachmentNg/aade3bcf-ef11-4593-98cc-14752c8a3102*/}
              <img
                src={manifold}
                class="img-fluid rounded-start"
                alt="manifold"
              />
              {/* Web3 img src: https://www.logolynx.com/topic/dalhousie+university*/}
              <img src={dal} class="img-fluid rounded-start" alt="dal" />
            </div>
            <div class="col-md-7">
              <div class="card-body">
                <h3 class="card-title">Front End Engineering</h3>
                <p class="card-text">
                  Languages &amp; Skills used: React, Vue-JS, PHP, SQL, Node-JS,
                  JavaScript, HTML, CSS, Gatsby-JS, Kubernetes, some Ruby on
                  Rails, Technical Teaching, Public Speaking, Leadership,
                  Technical Writing.<br/>Based in Halifax, Canada
                </p>
                <p class="card-text">
                  <small class="text-muted">
                    <button
                      class="click-for-more"
                      onClick={() => this.setState({ show: "true", id: 2 })}
                    >
                      <span class="Special-Text">Click for more details</span>
                    </button>
                  </small>
                </p>
              </div>
            </div>
          </div>
          {this.state.show === "true" && this.state.id === 2 ? (
            <div>
              <div
                class="card-body fadeIn"
                style={{ marginTop: "20px", marginBottom: "20px" }}
              >
                Throughout the past four years, I have held various Front end
                positions in many different positions. One of them being a Head
                TA for Web Design &amp; Development and Server Side Scripting at
                Dalhousie University. During this role, I managed the TA team
                (of about 40+ TA's) and taught to many students. Through this
                position, I was able to communicate in a technical and
                understanding manner and effectively explain topics in the
                course's material.
                <br />
                <br />
                While I was a Junior Software Developer at Manifold, I worked in
                both front end and back end in the company. I focused on
                utilizing React to build and fix components on their main
                website. I also used to write blogs about Kubernetes on their{" "}
                <a href="https://kubelist.com/">Kubelist.</a> In the back end, I
                was using Docker and Kubernetes to test containers.
              </div>
            </div>
          ) : null}
        </div>
        {/*/ Container 3 */}
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-5 crypto">
              {/* CLC img src: https://stemminds.com/wp-content/uploads/2018/05/clc.html*/}
              <img src={clc} class="img-fluid rounded-start" alt="clc" />
              {/* LRF img src: https://www.linkedin.com/company/little-robot-friends/?originalSubdomain=ca*/}
              <img src={lrf} class="img-fluid rounded-start" alt="lrf" />
            </div>
            <div class="col-md-7">
              <div class="card-body">
                <h3 class="card-title">Developer Relations</h3>
                <p class="card-text">
                  Languages &amp; Skills used: HTML, CSS, C, Ardiuno, Technical
                  Teaching, Public Speaking, Technical Writing.<br/>Based in Toronto, Canada
                </p>
                <p class="card-text">
                  <small class="text-muted">
                    <button
                      class="click-for-more"
                      onClick={() => this.setState({ show: "true", id: 3 })}
                    >
                      <span class="Special-Text">Click for more details</span>
                    </button>
                  </small>
                </p>
              </div>
            </div>
          </div>
          {this.state.show === "true" && this.state.id === 3 ? (
            <div>
              <div
                class="card-body fadeIn"
                style={{ marginTop: "20px", marginBottom: "20px" }}
              >
                Since 2018, I've worked on many DevRel opportunities. Including
                technical writing for start up companies and speaking about
                coding at various Tech events. <br />
                <br />
                At Canada Learning Code, I was a Learner Experience Coordinator,
                ensuring the students aged 6-14 were understanding the technical
                material and teaching them in weekly classes. The material
                myself and my team taught covered website building, game
                development, and design practices.
                <br />
                <br />
                At Little Robot Friends, I was a Digital Marketing Developer,
                writing technical blog posts and educating the public at tech
                events on Arduino, C, and how to code with robots. Some of my
                articles can be found{" "}
                <a href="https://littlerobotfriends.com/blogs/stories">
                  here on their website.
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Work;
