import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

class AddictionResources extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: "population",
    };
  }

  render() {
    return (
      <div className="addiction-page">
        <br />
        <h1 className="ad-title">Addiction Resources </h1>
        <br />
        <Tabs
          className="tab-color"
          id="controlled-tab-example"
          activeKey={this.state.key}
          onSelect={(key) => this.setState({ key })}
        >
          <Tab className="pop-tab" eventKey="population" title="by population">
            <div className="ad-populations">
              {" "}
              <h3 className="ad-lgbt">
                <a
                  className="lgbt-link"
                  href="https://www.glbthotline.org/"
                  style={{ textDecoration: "none " }}
                >
                  LGBTQ
                </a>{" "}
              </h3>{" "}
              <br />
              <h3 className="ad-senior">
                <a
                  className="senior-link"
                  href="https://rehabnet.com/"
                  style={{ textDecoration: "none " }}
                >
                  seniors
                </a>{" "}
              </h3>{" "}
              <br />
              <h3 className="ad-teen">
                <a
                  className="teen-link"
                  href="https://teens.drugabuse.gov/"
                  style={{ textDecoration: "none " }}
                >
                  teens
                </a>{" "}
              </h3>{" "}
              <br />
              <h3 className="ad-veterans">
                {" "}
                <a
                  className="veteran-link"
                  href="https://www.mentalhealth.va.gov/MENTALHEALTH/substance-use/index.asp"
                  style={{ textDecoration: "none " }}
                >
                  veterans{" "}
                </a>{" "}
              </h3>{" "}
              <br />
              <h3 className="ad-women">
                <a
                  className="women-link"
                  href="https://womenforsobriety.org/"
                  style={{ textDecoration: "none " }}
                >
                  women
                </a>{" "}
              </h3>{" "}
            </div>
          </Tab>
          <Tab className="ad-tab" eventKey="anon" title="anonymous">
            <div className="by-addiction">
              <div className="alcohol">
                <h2 className="alcohol-title">alcohol</h2>
                <h3 className="alcohol-1">
                  <a
                    className="alink-1"
                    href="https:www.aa.org/"
                    style={{ textDecoration: "none " }}
                  >
                    ☞ alcoholics anonymous ☜
                  </a>
                </h3>
              </div>
              <div className="cocaine">
                <h2 className="cocaine-title">cocaine</h2>
                <h3 className="cocaine-1">
                  <a
                    href="https://ca.org/"
                    style={{ textDecoration: "none " }}
                    className="alink-2"
                  >
                    ☞ cocaine anonymous ☜
                  </a>
                </h3>
              </div>
              <div className="marijuana">
                <h2 className="marijuana-title">marijuana</h2>
                <h3 className="marijuana-1">
                  <a
                    className="alink-3"
                    href="https://marijuana-anonymous.org/"
                    style={{ textDecoration: "none " }}
                  >
                    ☞ marijuana anonymous ☜
                  </a>
                </h3>
              </div>
              <div className="methamphetamine">
                <h2 className="methamphetamine-title">methamphetamine</h2>
                <h3 className="methamphetamine-1">
                  <a
                    className="alink-4"
                    href="https://www.crystalmeth.org/"
                    style={{ textDecoration: "none " }}
                  >
                    ☞ methamphetamine anonymous ☜
                  </a>
                </h3>
              </div>
              <div className="Opiods">
                <h2 className="opiod-title">opiods</h2>
                <h3 className="opiod-1">
                  <a
                    className="alink-5"
                    href="https://www.na.org/"
                    style={{ textDecoration: "none " }}
                  >
                    ☞ narcotics anonymous ☜
                  </a>
                </h3>
                <h3 className="opiod-3">
                  <a
                    className="alink-6"
                    href="https://www.neveraloneclub.org/"
                    style={{ textDecoration: "none " }}
                  >
                    ☞ never alone club ☜
                  </a>
                </h3>
              </div>
            </div>
          </Tab>
          <Tab
            className="support-tab"
            eventKey="support"
            title="other sources of support"
          >
            <div className="ad-support">
              <br />
              <h3>SAMHSA national helpline:</h3>
              <p>1-800-662-HELP(4357)</p>{" "}
              <h3 className="sup-1">
                {" "}
                <a
                  href="https://adultchildren.org/"
                  style={{ textDecoration: "none " }}
                  className="support-link-1"
                >
                  adult children of alcoholics{" "}
                </a>{" "}
              </h3>{" "}
              <br />
              <h3 className="sup-2">
                <a
                  href="https://al-anon.org/"
                  style={{ textDecoration: "none " }}
                  className="support-link-2"
                >
                  al-anon
                </a>{" "}
              </h3>{" "}
              <br />
              <h3 className="sup-3">
                <a
                  href="https://www.nar-anon.org/"
                  style={{ textDecoration: "none " }}
                  className="support-link-3"
                >
                  nar-anon
                </a>{" "}
              </h3>{" "}
              <br />
              <h3 className="sup-4">
                {" "}
                <a
                  href="https://drugfree.org/"
                  style={{ textDecoration: "none " }}
                  className="support-link-4"
                >
                  partnership for drug-free kids{" "}
                </a>{" "}
              </h3>{" "}
              <br />
              <h3 className="sup-5">
                {" "}
                <a
                  href="https://www.smartrecovery.org/suggested-reading-list/"
                  style={{ textDecoration: "none " }}
                  className="support-link-5"
                >
                  suggested books{" "}
                </a>{" "}
              </h3>{" "}
              <br />
              <h3 className="sup-6">
                {" "}
                <a
                  href="https://www.therecoveryvillage.com/recovery/related/addiction-recovery-podcasts/"
                  style={{ textDecoration: "none " }}
                  className="support-link-6"
                >
                  suggested podcasts{" "}
                </a>{" "}
              </h3>{" "}
              <br />
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default AddictionResources;
