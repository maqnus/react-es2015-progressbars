import React from 'react'
import ReactDOM from 'react-dom'
import ProgressElement from './Progress'


export default class Bars extends React.Component {

	/*	Constructor details:
   * Example: 
   * var array = {
   *   januar: {
   *     percent: 10
   *   },
   *   februar: {
   *     percent: 20
   *   }
	 * <Bars bars={array} />
	 */

  constructor(props) {
    super(props)
    this.state = {bar_array: props.bars}
  }

  renderProgressbars() {
  	let progressbars = []
    let array = this.state.bar_array
    for (var key in array) {
      progressbars.push(<ProgressElement key={key} percent={array[key].percent} />)
    }

  	return progressbars
  }

  render() {
    	return (
      <div>
        {this.renderProgressbars()}
      </div>
    )
  }
}
ReactDOM.render(<Bars bars={array} />, document.querySelector('.bonusapp'))