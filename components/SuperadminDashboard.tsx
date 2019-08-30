import React from 'react'
import CalendarChart from './commons/CalendarChart';
import ComboChart from './commons/ComboChart';
import FormatterChart from './commons/FormatterChart.js';
import TodoApp from './commons/TodoList.js'

class Dashboard extends React.Component {

  state = {
    newMembers: 1000,
    messages: 20,
    shopping: 10100,
    sales: 100000
  }

  render() {
    // this.increaseCounter()
    return (
      <>
        <h6>Superadmin Dashboard</h6>
        <div className="d-flex justify-content-between flex-wrap ">

          <div className="card m-3 bg-success text-light" style={{ width: "18rem" }}>
            <div className="card-body px-4">
              <div className="d-flex justify-content-between">
                <i className="fa fa-users my-auto"></i>
                <div className="">
                  <h5 className="card-title text-light">New Members</h5>
                  {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                  <p className="card-text text-center font-weight-bold increment" id="newMembers" onLoad={this.increaseCounter}>900</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card m-3 bg-light text-dark" style={{ width: "18rem" }}>
            <div className="card-body px-4">
              <div className="d-flex justify-content-between">
                <i className="fa fa-envelope my-auto"></i>
                <div className="">
                  <h5 className="card-title text-secondary">Messages</h5>
                  {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                  <p className="card-text text-center font-weight-bold increment" id="messages" onLoad={this.increaseCounter}>10</p>
                </div>
              </div>
            </div>
          </div>


          <div className="card m-3 text-dark" style={{ width: "18rem", backgroundColor: 'yellow' }}>
            <div className="card-body px-5">
              <div className="d-flex justify-content-between">
                <i className="fa fa-cart-arrow-down my-auto"></i>
                <div className="">
                  <h5 className="card-title text-secondary">Shopping</h5>
                  {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                  <p className="card-text text-center font-weight-bold increment" id="shopping" onLoad={this.increaseCounter}>10000</p>
                </div>
              </div>
            </div>
          </div>


          <div className="card m-3 text-dark" style={{ width: "18rem", backgroundColor: 'magenta' }}>
            <div className="card-body px-5">
              <div className="d-flex justify-content-between">
                <i className="fa fa-inr my-auto"></i>
                <div className="">
                  <h5 className="card-title text-secondary">Sales</h5>
                  {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                  <p className="card-text text-center font-weight-bold increment" id="sales" onLoad={this.increaseCounter}>99900</p>
                </div>
              </div>
            </div>
          </div>
        </div >

        <div className="d-flex px-3 my-2">
          <CalendarChart />
          {/* <ComboChart /> */}

        </div>
        <div className="d-flex justify-content-around px-3 my-2 text-secondary">
          <FormatterChart />
          <TodoApp />
        </div>

      </>

    )
  }

  increaseCounter(item) {
    console.log("increasing counter")


    const getTime = (): number => {
      console.log(this.state[item.id])
      const itemsLeft = this.state[item.id] - parseInt(item.textContent)
      let time
      if (itemsLeft > 11) {
        time = 20
      } else {
        time = 100
      }

      return time
    }
    setTimeout(() => {

      item.textContent = parseInt(item.textContent) + 1 + ''
      // newMembers.style.visibility = 'visible'
      if (parseInt(item.textContent) < this.state[item.id]) {
        this.increaseCounter(item)
      }
    }, getTime())

  }

  componentDidMount() {
    const items = document.querySelectorAll(".increment")
    items.forEach((item) => {
      this.increaseCounter(item)
    })
  }
}

export default Dashboard