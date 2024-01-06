import react, { Component } from "react";
import "../Header/Header.css";
import ReusableProps from "../ReusableProps";

class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <div className="puppy-header">
            <p>
              Developed by:
              <em>
                <strong>Elvis</strong> <br />
                With the Assist of <strong>Evangadi</strong> <br />
                2023 G.C
              </em>
            </p>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
