import React from 'react'
import ReactDOM from 'react-dom'
import ProgressElement from './Progress'


export default class Bars extends React.Component {

	/*	Constructor details:
	 *	Example: <Bars />
	 */

	 constructor(props) {
	 	super(props)

	 }

  renderProgressbars() {
  	let progressbars = []
  	let done = false
  	let count = 0

  	while (!done) {
  		progressbars.push(<ProgressElement key={count} percent={13*count+1} />)
  		done = count++ > 2
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

ReactDOM.render(<Bars />, document.querySelector('.bonusapp'))