import React, { ReactEventHandler, FormEvent, InputHTMLAttributes } from 'react'
import { PersistGate } from 'redux-persist/integration/react';
import { Persistor } from 'redux-persist';
import protectedRoute from '../src/hocs/ProtectedRoute';
import { Dispatch } from 'redux'
import ActionTypes from '../src/redux/config/types';
import { connect } from 'react-redux';
import Router from 'next/router';

interface AppProps {
  persistor: Persistor
}

interface ReduxProps {
  loginUser(role: string): void
}

class Login extends React.Component<AppProps & ReduxProps> {
  state = {
    username: ''
  }

  handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    this.props.loginUser(this.state.username)
    Router.replace('/')
  }

  handleInputChange = (e: any) => {
    e.persist()
    this.setState({ username: e.target.value })
  }


  render() {

    return (

      <div className="">
        <form
          onSubmit={this.handleSubmit}
          className="mx-auto mt-5 w-50 border rounded p-2 p-md-5">
          <h6 className="text-center">Login</h6>

          <div className="form-group">
            <label className="form-label">Username</label>
            <input value={this.state.username} onChange={this.handleInputChange} className="form-control" placeholder="johndoe@gmail.com" />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input className="form-control" type="password" placeholder="*********" />
          </div>
          <div>
            <span><i>username - role you want access for (superadmin, admin, member) <br />password - blank</i></span>
          </div>
          <button className="btn btn-sm float-right btn-primary">Submit</button>

        </form>
      </div >

    )
  }
}


const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    loginUser: (role: string): void => {
      dispatch({ type: ActionTypes.LOGIN_USER, payload: { role } })
    }
  }
}

export default connect(null, mapDispatchToProps)(Login)
