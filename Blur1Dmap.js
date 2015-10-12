const React = require("react");
const GL = require("gl-react");
const glslify = require("glslify");

const shaders = GL.Shaders.create({
  blur1Dmap: {
    frag: glslify(`${__dirname}/blur1Dmap.frag`)
  }
});

module.exports = GL.createComponent(
  ({ width, height, direction, minBlur, maxBlur, blurMap, offset, children }) =>
  <GL.View
    shader={shaders.blur1Dmap}
    width={width}
    height={height}
    uniforms={{
      direction,
      minBlur,
      maxBlur,
      blurMap,
      offset,
      resolution: [ width, height ]
    }}>
    <GL.Uniform name="t">{children}</GL.Uniform>
  </GL.View>,
  { displayName: "Blur1D" });
