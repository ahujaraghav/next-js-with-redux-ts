import React from 'react'
import CalendarChart from './commons/CalendarChart';
import ComboChart from './commons/ComboChart';
import FormatterChart from './commons/FormatterChart.js';
import TodoApp from './commons/TodoList.js'
import GeoChart from './commons/GeoChart';
import TableChart from './commons/TableChart';
import PieChart from './commons/PieChart';
import ActionTypes from '../src/redux/config/types';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { StoreState } from '../src/redux/config';

interface AppProps {
  role: string,
  dataLocal: number,
  dataCookie: number,
  data: number
}

interface AppDispatch {
  increment(),
  dispatch: Dispatch
}

class AdminDashboard extends React.Component<any> {
  state = {
    newMembers: 1000,
    messages: 20,
    shopping: 10100,
    sales: 100000
  }
  render() {
    return (
      <>
        <h6>Admin Dashboard</h6>
        <div className="d-flex justify-content-between flex-wrap ">

          <div className="card m-3 bg-light text-dark" style={{ width: "18rem" }}>
            <div className="card-body px-4">
              <div className="d-flex justify-content-between">
                <i className="fa fa-users my-auto"></i>
                <div className="">
                  <h5 className="card-title text-secondary">Cookie Persist</h5>
                  {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                  <p className="card-text text-center font-weight-bold increment" id="newMembers">{this.props.dataCookie}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card m-3 bg-light text-dark" style={{ width: "18rem" }}>
            <div className="card-body px-4">
              <div className="d-flex justify-content-between">
                <i className="fa fa-envelope my-auto"></i>
                <div className="">
                  <h5 className="card-title text-secondary">Local Persist</h5>
                  {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                  <p className="card-text text-center font-weight-bold increment" id="messages">{this.props.dataLocal}</p>
                </div>
              </div>
            </div>
          </div>


          <div className="card m-3 bg-light text-dark" style={{ width: "18rem" }}>
            <div className="card-body px-5">
              <div className="d-flex justify-content-between">
                <i className="fa fa-cart-arrow-down my-auto"></i>
                <div className="">
                  <h5 className="card-title text-secondary">Without persist</h5>
                  {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                  <p className="card-text text-center font-weight-bold increment" id="shopping">{this.props.data}</p>
                </div>
              </div>
            </div>
          </div>


          <div className="card m-3 bg-light text-dark" style={{ width: "18rem" }}>
            <div className="card-body px-5">
              <div className="d-flex justify-content-between">
                <i className="fa fa-plus-circle my-auto" aria-hidden="true"></i>

                <div className="">
                  <h5 className="card-title text-secondary">Change Store</h5>
                  <button className="btn btn-danger" onClick={this.props.increment}>Increase Counter</button>
                  {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                  {/* <p className="card-text text-center font-weight-bold increment" id="sales">99900</p> */}
                </div>
              </div>
            </div>
          </div>
        </div >

        <div className="d-flex justify-content-around px-2 my-2 text-secondary">
          <div className="mx-2">
            <GeoChart />
          </div>
          <div className="mx-2">
            <FormatterChart />
          </div>

        </div>


        <div className="d-flex justify-content-around px-5 my-4 mx-5 text-secondary">
          <TableChart />

        </div>
        <div className="d-flex justify-content-around px-3 my-2 text-secondary">

          <TodoApp />

          <PieChart />

          {/* <CalendarChart /> */}
          {/* <ComboChart /> */}

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
    // const items = document.querySelectorAll(".increment")
    // items.forEach((item) => {
    //   // this.increaseCounter(item)
    // })
  }
}

const mapStateToProps = (state: StoreState) => {
  return {
    role: state.user.role,
    dataLocal: state.dataLocal.records,
    dataCookie: state.dataCookie.records,
    data: state.data.records,
    // abc: state.user.role
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    increment: () => {
      dispatch({ type: ActionTypes.INCREMENT })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard)