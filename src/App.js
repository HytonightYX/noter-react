import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Mobile from './components/Responsive/Mobile'
import {Layout, message} from 'antd'
import Cookies from 'universal-cookie'
import Repo from './pages/Repo/Repo'
import Note from './pages/Note/Note'
import NoteView from './pages/NoteView/NoteView'
import Profile from './pages/Profile/Profile'
import Market from './pages/Market/Market'
import TopHeader from './components/TopHeader/TopHeader'
import {loginAction} from './actions/userAction'
import {listNoteByIdAction, listNotesAction} from './actions/noteAction'
import './App.css'
import BottomNav from './components/BottomNav/BottomNav'
import Affix from 'antd/lib/affix'

const {Content, Footer} = Layout

class App extends Component {

	componentWillMount() {
		const cookies = new Cookies()
		const id = cookies.get('userid')
		if (id && id !== 'null') {
			console.log(id)
			message.success('登录成功')
			this.props.dispatch(loginAction(id))
			this.props.dispatch(listNoteByIdAction(id))
		}
		this.props.dispatch(listNotesAction)
	}

	render() {
		return (
			<div>
				<Layout>
					<TopHeader/>

					<Content className={'content'}>
						<div className={'warp'}>
							<Route exact path={'/'} component={Repo}/>
							<Route exact path={'/market'} component={Market}/>
							<Route exact path={'/note/:id/edit'} component={Note}/>
							<Route exact path={'/note/:id/view'} component={NoteView}/>
							<Route exact path={'/profile'} component={Profile}/>
						</div>
					</Content>

					<Footer style={{textAlign: 'center'}}>
						2019/06/06 @ Noter-在线笔记共享平台 - gitHub地址：
						<a href="https://github.com/HytonightYX">HytonightYX</a>
					</Footer>

					<Mobile>
						<Affix offsetBottom={0}>
							<BottomNav/>
						</Affix>
					</Mobile>
				</Layout>
			</div>
		)
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


