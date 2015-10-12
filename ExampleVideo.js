const React = require("react");
const GL = require("gl-react");
const Field = require("./Field");
const HueRotate = require("./HueRotate");
const Blur = require("./Blur");

const ExampleVideo = GL.createComponent(({ width, height, blurPasses, blur, hue }) =>
<HueRotate eventsThrough visibleContent autoRedraw hue={hue} width={width} height={height}>
  <Blur
    width={width}
    height={height}
    passes={blurPasses}
    factor={blur}>
    <video autoPlay loop>
      <source type="video/mp4" src="video.mp4" />
    </video>
  </Blur>
</HueRotate>, { displayName: "ExampleVideo" });


class ExampleVideoWithControls extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      blur: 0,
      blurPasses: 2,
      hue: 0,
      debug: null
    };
  }
  getGLCanvas () {
    return this.refs.demo.getGLCanvas();
  }
  render () {
    const { blur, hue, blurPasses } = this.state;
    const { width, height } = this.props;
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: 50 }}></div>
        <div style={{ width }}>
          <ExampleVideo ref="demo" width={width} height={height} blur={blur} blurPasses={blurPasses} hue={hue} />
        </div>
        <div style={{ flex: 1 }}>
          <Field name="Hue" min={0} max={2*Math.PI} value={hue} onChange={hue => this.setState({ hue })} />
          <Field name="Blur" min={0} max={16} value={blur} onChange={blur => this.setState({ blur })} />
          <Field name="Blur Passes" min={2} max={8} step={1} value={blurPasses} onChange={blurPasses => this.setState({ blurPasses })} />
        </div>
        <div style={{ width: 50 }}></div>
      </div>
    );
  }
}

module.exports = ExampleVideoWithControls;
