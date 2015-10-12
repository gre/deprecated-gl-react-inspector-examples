const React = require("react");
const GL = require("gl-react");
const {
  PropTypes
} = React;
const Blur1Dmap = require("./Blur1Dmap");

const NORM = Math.sqrt(2)/2;

function directionForPass (p, factor, total) {
  const f = factor * p / total;
  switch (p%4) {
  case 0: return [f,0];
  case 1: return [0,f];
  case 2: return [f*NORM,f*NORM];
  case 3: return [f*NORM,-f*NORM];
  }
  return p%2 ? [f,0] : [0,f];
}

module.exports = GL.createComponent(
  ({ width, height, children, passes, ...rest }) => {
    const rec = p => p <= 0 ? children :
    <Blur1Dmap {...rest} width={width} height={height} direction={directionForPass(p, 1, passes)}>
      {rec(p-1)}
    </Blur1Dmap>;
    return rec(passes);
  },
  {
    displayName: "Blur",
    defaultProps: {
      passes: 2
    },
    propTypes: {
      width: PropTypes.number,
      height: PropTypes.number,
      children: PropTypes.any.isRequired,
      passes: PropTypes.number
    }
  });
