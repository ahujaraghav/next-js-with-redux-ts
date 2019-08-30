import React from 'react'
import { StoreState } from '../src/redux/config';
import { connect, DispatchProp } from 'react-redux'
import { Dispatch } from 'redux';
import Link from 'next/link'
import ActionTypes from '../src/redux/config/types';
import AdminIndex from '../components/admin';
import SuperadminIndex from '../components/superadmin';
import SideNavigation from '../components/SideNavigation';
import SuperadminDashboard from '../components/SuperadminDashboard';
import AdminDashboard from '../components/AdminDashboard';

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

class App extends React.Component<AppProps & AppDispatch> {

  render() {
    return (
      <>
        <SideNavigation role={this.props.role} />
        <div style={{ padding: '20px' }}>

          {this.props.role === 'superadmin' && <SuperadminDashboard />}

          {this.props.role === 'admin' && <AdminDashboard />}

          {(this.props.role !== 'admin' && this.props.role !== 'superadmin') && <>No Content</>}


          {/* <hr></hr>
          <Link href="/login"><a >Login</a></Link>
          <hr></hr>

          <h6>User role/name - {this.props.role}</h6>
          <button className="btn btn-sm btn-primary" onClick={() => { this.props.increment() }}>Change Store</button>
          <div>Cookie Persist Sample - {this.props.dataCookie}</div>
          <div>Local Persist Sample - {this.props.dataLocal}</div>
          <div>Local w/o persist Sample - {this.props.data}</div>
          <hr></hr>
          {this.props.role === 'admin' &&
            <AdminIndex />
          }

          {this.props.role === 'superadmin' &&
            <SuperadminIndex />
          }

          <hr></hr>
          <Link href="/admin"><a style={{ color: `${this.props.role === 'admin' ? 'green' : 'red'}` }}>Page for admin - {`${this.props.role === 'admin' ? 'authorized' : 'unauthorized'}`}</a></Link><br></br>
          <Link href="/superadmin"><a style={{ color: `${this.props.role === 'superadmin' ? 'green' : 'red'}` }}>Page for superadmin - {`${this.props.role === 'superadmin' ? 'authorized' : 'unauthorized'}`}</a></Link>
          <hr></hr>
 */}

        </div>
      </>

    )
  }

  componentDidMount() {
    // document.body.style.setProperty("--color-primary", "blue");
  }

}


const mapStateToProps = (state: StoreState): AppProps => {
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


export default connect(mapStateToProps, mapDispatchToProps)(App)