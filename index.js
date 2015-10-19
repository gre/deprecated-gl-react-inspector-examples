const React = require("react");
const { render } = require("react-dom");
const GlReactInspector = require("gl-react-inspector");
const Perf = require("react-addons-perf");
const ExampleVideo = require("./ExampleVideo");
const Example1 = require("./Example1");
const Example2 = require("./Example2");

window.Perf = Perf;

class Static extends React.Component {
  shouldComponentUpdate (props) {
    return this.props.value !== props.value;
  }
  render () {
    return this.props.children;
  }
}

const Nav = ({onClick, children}) => <a href="#" onClick={e => {
  e.preventDefault();
  onClick();
}} style={{ color: "#9cf" }}>{children}</a>;

class Demo extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      glCanvas: null,
      Example: Example1
    };
  }
  componentDidMount () {
    window.addEventListener("resize", () => this.forceUpdate());
  }
  render () {
    const { glCanvas, Example } = this.state;
    const width = 320;
    const height = 240;
    return (
      <div>
        <Static value={Example}>
          <Example width={width} height={height}
            ref={ref => { if (ref) this.setState({ glCanvas: ref.getGLCanvas() }); }}
          />
        </Static>
        <div style={{ height: window.innerHeight-height-50 }}>
          { glCanvas ? <GlReactInspector.Inspector
            glCanvas={glCanvas}
          /> : null }
        </div>
        <nav style={{ textAlign: "center" }}>
          <Nav onClick={() => this.setState({ Example: Example1 })}>Example1</Nav>{" – "}
          <Nav onClick={() => this.setState({ Example: Example2 })}>Example2</Nav>{" – "}
          <Nav onClick={() => this.setState({ Example: ExampleVideo })}>Video</Nav>
        </nav>
      </div>
    );
  }
}

render(<Demo />, document.getElementById("container"));
