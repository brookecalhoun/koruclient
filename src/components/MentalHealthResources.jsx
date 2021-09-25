import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

class MentalHealthResources extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: "population",
    };
  }

  render() {
    return (
      <div className="mentalhealth-page">
        <br />
        <h1 className="ad-title">mental health resources </h1>{" "}
        <br />
        <div className="subtitle">
          <p>national suicide prevention lifeline:</p>
          <h4>1-800-273-8255</h4>
        </div>
        <br />
        <Tabs
          className="tab-color"
          id="controlled-tab-example"
          activeKey={this.state.key}
          onSelect={(key) => this.setState({ key })}
        >
          <Tab className="app-tab" eventKey="app" title="apps">
            <div className="apps">
              {" "}
              <h3 className="mindshift">
                <a
                  href="https://myhealthapps.net/app/details/463/mindshift"
                  style={{ textDecoration: "none " }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/mindshift.png`}
                    className="mindshift-link"
                    alt="mindshift"
                  />
                  <p className="mindshift-name">mindshift</p>
                </a>{" "}
              </h3>{" "}
              <h3 className="calm">
                <a
                  className="calm-link"
                  href="https://www.calm.com/"
                  style={{ textDecoration: "none " }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/calm.png`}
                    className="calm-link"
                    alt="calm"
                  />
                  <p className="calm-name">calm</p>
                </a>{" "}
              </h3>{" "}
              <h3 className="betterhelp">
                <a
                  href="https://www.betterhelp.com/"
                  style={{ textDecoration: "none " }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/betterhelp.png`}
                    className="betterhelp-link"
                    alt="betterhelp"
                  />
                  <p className="betterhelp-name">betterhelp</p>
                </a>{" "}
              </h3>{" "}
              <h3 className="headspace">
                <a
                  href="https://www.headspace.com/"
                  style={{ textDecoration: "none " }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/headspace.png`}
                    className="headspace-link"
                    alt="headspace"
                  />
                  <p className="headspace-name">headspace</p>
                </a>{" "}
              </h3>{" "}
              <h3 className="nomo">
                <a
                  href="https://saynomo.com/"
                  style={{ textDecoration: "none " }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/nomo.png`}
                    className="nomo-link"
                    alt="nomo"
                  />
                  <p className="nomo-name">nomo</p>
                </a>{" "}
              </h3>{" "}
              <h3 className="talkspace">
                <a
                  href="https://www.talkspace.com/"
                  style={{ textDecoration: "none " }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/talkspace.png`}
                    className="talkspace-link"
                    alt="talkspace"
                  />
                </a>{" "}
                <p className="talkspace-name">talkspace</p>
              </h3>{" "}
            </div>
          </Tab>
          <Tab className="book-tab" eventKey="book" title="books">
            <div className="books">
              {" "}
              <h3 className="thebody">
                <a
                  href="https://www.amazon.com/Body-Keeps-Score-Healing-Trauma-ebook/dp/B00G3L1C2K/ref=sr_1_1?crid=33U575PVU6JWX&dchild=1&keywords=the+body+keeps+the+score&qid=1632523862&sprefix=the+body+%2Caps%2C234&sr=8-1"
                  style={{ textDecoration: "none " }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/thebodykeepsthescore.jpeg`}
                    className="thebody-link"
                    alt="thebody"
                  />
                </a>{" "}
              </h3>{" "}
              <h3 className="change-brain">
                <a
                  className="change-brain"
                  href="https://www.amazon.com/Change-Your-Brain-Revised-Expanded-ebook/dp/B01208WMYQ/ref=sr_1_3?dchild=1&keywords=change+your+brain+change+your+life&qid=1632531802&sr=8-3"
                  style={{ textDecoration: "none " }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/changebrain.jpeg`}
                    className="change-brain-link"
                    alt="change-brain"
                  />
                </a>{" "}
              </h3>{" "}
              <h3 className="hope">
                <a
                  href="https://www.amazon.com/Hope-Help-Your-Nerves-Anxiety-ebook/dp/B009PFN4IQ/ref=sr_1_1?crid=2AEQV2HE3Q99L&dchild=1&keywords=hope+and+health+for+your+nerves+end+anxiety+now&qid=1632531998&sprefix=hope+and+health+for%2Caps%2C207&sr=8-1"
                  style={{ textDecoration: "none " }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/hope.jpg`}
                    className="hope-link"
                    alt="hope"
                  />
                </a>{" "}
              </h3>{" "}
              <h3 className="russell">
                <a
                  href="https://www.amazon.com/Recovery-Freedom-Addictions-Russell-Brand-ebook/dp/B06W5P7384/ref=sr_1_1?crid=30UB5SYNCX16K&dchild=1&keywords=russell+brand+recovery+book&qid=1632532179&sprefix=russell+brand+re%2Caps%2C218&sr=8-1"
                  style={{ textDecoration: "none " }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/russell.jpeg`}
                    className="russell-link"
                    alt="russell"
                  />
                </a>{" "}
              </h3>{" "}
            </div>
          </Tab>
          <Tab className="site-tab" eventKey="site" title="websites">
            <div className="sites">
              <br />
              <p>scroll for more</p>
              <p>
                <a href="https://www.nami.org/">
                  National Alliance on Mental Illness (NAMI)
                </a>
              </p>
              <p>
                <a href="http://www.mhresources.org/">
                  Mental Health Resources (MHR)
                </a>
              </p>
              <p>
                <a href="http://www.psychiatry.org/mental-health/">
                  American Psychiaty Association
                </a>
              </p>
              <p>
                <a href="https://medlineplus.gov/mentalhealth.html">
                  MedlinePlus - Mental Health
                </a>
              </p>
              <p>
                <a href="http://www.who.int/mental_health/evidence/atlas/en/">
                  World Health Organization (WHO) Project Atlas
                </a>
              </p>
              <p>
                <a href="http://www.mentalhealth.gov/">
                  U.S. Department of Health & Human Services — Mental Health
                </a>
              </p>
              <p>
                <a href="http://www.thetrevorproject.org/">
                  The Trevor Project
                </a>
              </p>
              <p>
                <a href="http://www.mentalhealth.va.gov/">
                  U.S Department of Veterans Affairs (VA) — Mental Health
                </a>
              </p>
              <p>
                <a href="https://screening.mentalhealthscreening.org/Military_NDSD">
                  MindWise — Military and Family Screenings
                </a>
              </p>
              <p>
                <a href="https://www.ncoa.org/center-for-healthy-aging/behavioral-health/">
                  National Council on Aging — Behavioral Health
                </a>
              </p>
              <p>
                <a href="https://www.womenshealth.gov/mental-health/resources/">
                  Office on Women’s Health — Mental Health Resources{" "}
                </a>
              </p>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default MentalHealthResources;
