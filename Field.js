const React = require("react");

const styles = {
  field: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "10px 0"
  },
  title: {
    width: "200px",
    textAlign: "right",
    padding: "10px 20px",
    fontSize: "1.4em",
    fontFamily: "Helvetica"
  },
  range: {
    flex: 1,
    height: "50px"
  }
};

class Field extends React.Component {
  render () {
    const { min, max, step, value, onChange, name } = this.props;
    return <label style={styles.field}>
      <span style={styles.title}>{name}</span>
      <input type="range"
        style={styles.range}
        min={min}
        max={max}
        step={step || 0.01}
        value={value}
        onChange={e => onChange(parseFloat(e.target.value))}
      />
    </label>;
  }
}
module.exports = Field;
