const React = require("react");
const GL = require("gl-react");
const HelloGL = require("./HelloGL");
const HueRotate = require("./HueRotate");
const Blur = require("./Blur");
const Add = require("./Add");

module.exports = GL.createComponent(props =>
<Blur {...props} passes={4} factor={4}>
  <Add>
    <HueRotate hue={6}>
     http://i.imgur.com/vGXYiYy.jpg
    </HueRotate>
    <HelloGL />
  </Add>
</Blur>,
{ displayName: "Example1" });
