import React from 'react'
import classSet from './classSet'

export default class ProgressElement extends React.Component {

  /*  Constructor details:
   *  Example: <ProgressElement />
   */

   constructor(props) {
    super(props)
    this.state = {percent: props.percent}
   }

  componentDidMount() {
    var percent = parseInt(this.state.percent)
    var deg = 360*percent/100 
    var element = this.refs.progress.getDOMNode()
    element.style.transform = 'rotate(-'+ deg +'deg)'
  }

  render() {
    var percent = Math.floor(this.state.percent)
    var classes = classSet({
      "progress-pie-chart": true,
      "gt-50": percent > 50
    })

    return (
      <div className="progress clearfix">
        <div className={classes}>
          <div className="ppc-progress">
            <div className="ppc-progress-fill" ref="progress"></div>
          </div>
          <div className="ppc-percents">
            <div className="pcc-percents-wrapper">
              <span>{percent + '%'}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}