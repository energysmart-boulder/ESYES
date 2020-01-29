import React, { Component } from "react"
import CountUp from "react-countup"
import VizSensor from "react-visibility-sensor"
import { CounterBackground } from "./styled"

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
        <CounterBackground>
          <CountUp
            prefix={this.props.prefix}
            end={this.state.viz ? this.props.value : 0}
            start={0}
            separator=","
          />
          <div>{this.props.title}</div>
        </CounterBackground>
      </VizSensor>
    )
  }
}

export default Counter