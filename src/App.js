import React, { Component } from 'react';
import { Link, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Repo from "./pages/Repo/Repo"
import Login from "./pages/Login/Login"
import Note from './pages/Note/Note'
import axios from 'axios'

import { Button, Col, Layout, Menu, Row } from 'antd'
import Profile from './pages/Profile/Profile'
import Cookies from 'universal-cookie'
import {loginAction} from './actions/userAction'
import TopHeader from './components/TopHeader/TopHeader'
const { Content, Footer } = Layout;

class App extends Component {
  componentWillMount() {
  	const cookies = new Cookies()
    const id = cookies.get('userid')
  	if (id) {
  	  this.props.dispatch(loginAction(id))
  	}
  }

  render() {
    return (
    <div>
      <Layout>
        <TopHeader/>
        <Content style={{ padding: '0 50px', marginTop: 30 }}>
          <div style={{
            background: '#fff',
            padding: 24,
            minHeight: '670px',
          }}>
            <Route exact path={"/login"} component={Login}/>
            <Route exact path={"/"} component={Repo}/>
            <Route exact path={"/note/:id/edit"} component={Note}/>
            <Route exact path={"/profile"} component={Profile}/>
          </div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          2019/06/06 @ Noter-在线笔记共享平台 - gitHub地址：
          <a href="https://github.com/Hi-Sen/React-Antd-demo-one" >https://github.com/HytonightYX</a>
        </Footer>

      </Layout>
    </div>
    );
  }
}

// mapStateToProps这个函数允许我们将 store 中的数据作为 props 绑定到组件上。
function mapStateToProps(state) {
  return {
    userReducer: state.userReducer
  }
}
export default connect(
  mapStateToProps
)(App)


