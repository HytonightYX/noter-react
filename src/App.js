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
const { Header, Content, Footer } = Layout;

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.cnblogs.com/hai-cheng/">个人中心</a>
    </Menu.Item>
    <Menu.Item>
      退出登录
    </Menu.Item>
  </Menu>
);

class App extends Component {
  componentWillMount() {
  	const cookies = new Cookies()

  	if (cookies.get('username') !== undefined) {
      this.setState({
        login: cookies.get('login') !== '0',
        username: cookies.get('userName')
      }, () => {
        console.log(this.state)
      })
  	}
  }

  render() {
    return (
    <div>
      <Layout>
        <Header style={{color:'#fff',textAlign:'center'}}>
          <Row>
            <Col span={8}>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['m1']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="m1"><Link to="/" >仓库</Link></Menu.Item>
                <Menu.Item key="m2">市场</Menu.Item>
                <Menu.Item key="m3"><Link to="/profile" >个人</Link></Menu.Item>
              </Menu>
            </Col>
            <Col span={10}>

            </Col>
            <Col span={4}>
              <Button type={"primary"} >
                <a href='https://github.com/login/oauth/authorize?client_id=3672b8255f18495d5093' target={''}>登录</a>
              </Button>
            </Col>
          </Row>
        </Header>

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
          Noter ©2019 Created by HytonightYX
        </Footer>

      </Layout>
    </div>
    );
  }
}

// mapStateToProps这个函数允许我们将 store 中的数据作为 props 绑定到组件上。
function mapStateToProps(state) {
  return {
    noteReducer: state.noteReducer
  }
}

export default connect(
  mapStateToProps,
)(App)


