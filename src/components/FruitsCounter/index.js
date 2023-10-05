import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {countMango: 0, countBanana: 0}

  onEatingMango = () => {
    this.setState(prevCount => ({countMango: prevCount.countMango + 1}))
  }

  onEatingBanana = () => {
    this.setState(prevCount => ({countBanana: prevCount.countBanana + 1}))
  }

  render() {
    const {countMango} = this.state
    const {countBanana} = this.state

    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">
            Bob ate <span className="count">{countMango}</span> mangoes{' '}
            <span className="count">{countBanana}</span> bananas
          </h1>
          <div className="eating-section-con">
            <div className="img-btn-con">
              <img
                className="img"
                alt="mangoImg"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <div>
                <button
                  type="button"
                  className="button"
                  onClick={this.onEatingMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="img-btn-con">
              <img
                className="img"
                alt="bananaImg"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <div>
                <button
                  type="button"
                  className="button"
                  onClick={this.onEatingBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
