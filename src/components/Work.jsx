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
                  JavaScript, Technical Writing, Technical Speaking.
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
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
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
                  Languages &amp; Skills used: React, Vue-JS, PHP, Node-JS,
                  JavaScript, HTML, CSS, Gatsby-JS, Kubernetes, some Ruby on
                  Rails, Technical Teaching, Public Speaking, Leadership,
                  Technical Writing.
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
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
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
                  Teaching, Public Speaking, Technical Writing.
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
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Work;
