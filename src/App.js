import { escapeRegExp } from "lodash";
import "./styles.css";

/**
 * escape special carachter in string when using regexp
 * @param {string} text
 */
const regExpEscape = (text) => {
  return text.replace(/[-[\]{}()*+!<=:?.\\^$|#\s,]/g, "\\$&");
};

const textToEscape = "Cool))^^d";
const regexWithLodash = new RegExp(escapeRegExp(textToEscape), "i");
const customRegex = new RegExp(regExpEscape(textToEscape), "i");
console.log("regexWithLodash", regexWithLodash);
console.log("customRegex", customRegex);

const App = () => {
  return (
    <div className="App">
      <div className="main">
        <h1>Two way to escape special character in Regex in Javascript</h1>
        <ul>
          <li>using lodash</li>
          <li>using custom function</li>
        </ul>
        <h6>See the console below to see the result</h6>
      </div>
      <footer>
        <a href="https://tiavina-michael-ralainirina.herokuapp.com/">
          Tiavina Michael Ralainirina
        </a>
      </footer>
    </div>
  );
};

export default App;
