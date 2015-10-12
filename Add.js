const React = require("react");
const GL = require("gl-react");
const glslify = require("glslify");

const shaders = GL.Shaders.create({
  add: {
    frag: glslify(`${__dirname}/add.frag`)
  }
});

module.exports = GL.createComponent(
  ({ children: [ t1, t2 ], ...rest }) =>
  <GL.View
    {...rest}
    shader={shaders.add}
    uniforms={{ t1, t2 }}
  />
  , { displayName: "Add" });
