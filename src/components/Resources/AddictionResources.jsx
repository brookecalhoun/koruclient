import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

// class AddictionResources extends React.Component {
//   render() {
//     console.log(this.props);
//     return (
//       <div className="addiction-resources-page">
//         <h1 className="addiction-title">Addiction Resources</h1>
//         <div className="ar-num-div">
//           <h1 className="ar-num">1-800-662-4357</h1>
//           <p>SAMHSA national hotline</p>
//         </div>
//         <div className="ad-populations">
//           <h2 className="pop-title">by population: </h2>
//           <h3 className="ad-lgbt">
//             <a href="https://www.glbthotline.org/">LGBTQ</a>
//           </h3>
//           <h3 className="ad-senior">
//             <a href="https://rehabnet.com/">seniors</a>
//           </h3>
//           <h3 className="ad-teen">
//             <a href="https://teens.drugabuse.gov/">teens</a>
//           </h3>
//           <h3 className="ad-veterans">
//             <a href="https://www.mentalhealth.va.gov/MENTALHEALTH/substance-use/index.asp">
//               veterans
//             </a>
//           </h3>
//           <h3 className="ad-women">
//             <a href="https://womenforsobriety.org/">women</a>
//           </h3>
//         </div>
//         <h2 className="support-title">means of support: </h2>
//         <div className="ad-support">
//           <h3 className="acoa">
//             <a href="https://adultchildren.org/">
//               adult children of alcoholics
//             </a>
//           </h3>
//           <h3 className="alanon">
//             <a href="https://al-anon.org/">al-anon</a>
//           </h3>
//           <h3 className="naranon">
//             <a href="https://al-anon.org/">nar-anon</a>
//           </h3>
//           <h3 className="dfk">
//             <a href="https://drugfree.org/">
//               partnership for drug-free kclassNames
//             </a>
//           </h3>
//         </div>
//         <div className="by-addiction">
//           <h2 className="support-title">by addiction: </h2>
//           <div className="alcohol">
//             <h2 className="alcohol-title">alcohol</h2>
//             <h3 className="alcohol-1">
//               <a href="https://www.aa.org/">alcoholics anonymous</a>
//             </h3>
//             <h3 className="alcohol-2">
//               <a href="https://alcoholtreatment.niaaa.nih.gov/">
//                 treatment navigator
//               </a>
//             </h3>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default AddictionResources;

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
        <h1 className="ad-title">Addiction Resources </h1>
        <Tabs
          id="controlled-tab-example"
          activeKey={this.state.key}
          onSelect={(key) => this.setState({ key })}
        >
          <Tab
            className="all"
            eventKey="population"
            title="search by population"
          >
            <div className="ad-populations">
              {" "}
              <h3 className="ad-lgbt">
                <a
                  href="https://www.glbthotline.org/"
                  style={{ textDecoration: "none " }}
                >
                  LGBTQ
                </a>{" "}
              </h3>{" "}
              <h3 className="ad-senior">
                <a
                  href="https://rehabnet.com/"
                  style={{ textDecoration: "none " }}
                >
                  seniors
                </a>{" "}
              </h3>{" "}
              <h3 className="ad-teen">
                <a
                  href="https://teens.drugabuse.gov/"
                  style={{ textDecoration: "none " }}
                >
                  teens
                </a>{" "}
              </h3>{" "}
              <h3 className="ad-veterans">
                {" "}
                <a
                  href="https://www.mentalhealth.va.gov/MENTALHEALTH/substance-use/index.asp"
                  style={{ textDecoration: "none " }}
                >
                  veterans{" "}
                </a>{" "}
              </h3>{" "}
              <h3 className="ad-women">
                <a
                  href="https://womenforsobriety.org/"
                  style={{ textDecoration: "none " }}
                >
                  women
                </a>{" "}
              </h3>{" "}
            </div>
          </Tab>
          <Tab eventKey="addiction" title="search by addiction">
            Profile content
          </Tab>
          <Tab eventKey="support" title="other sources of support">
            Contact content
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default AddictionResources;
