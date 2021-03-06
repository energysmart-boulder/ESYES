import React, { Component } from "react"
import PropTypes from "prop-types"
import CountUp from "react-countup"
import VizSensor from "react-visibility-sensor"

class Counter extends Component {
  constructor(props) {
    super(props)
    this.onVizChange = this.onVizChange.bind(this)
    this.state = {
      viz: false,
    }
  }
  onVizChange(isVisible) {
    if (isVisible) {
      this.setState({ viz: true })
    }
  }

  render() {
    return (
      <VizSensor onChange={this.onVizChange} delayedCall>
        <div>
          <CountUp
            className="counter_value"
            prefix={this.props.prefix}
            end={this.state.viz ? this.props.value : 0}
            start={0}
            separator=","
          />
          <div className="counter_title">{this.props.title}</div>
        </div>
      </VizSensor>
    )
  }
}

Counter.propTypes = {
  prefix: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default Counter
