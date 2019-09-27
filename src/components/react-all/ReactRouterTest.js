import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom'
// import {BrowserRouter, Link, Route, Redirect} from './MyReactRouterTest'
import { connect } from 'react-redux'
//import {login, logout} from '../../store/role'

function ProductList() {
    return (
        <div>
            <h3>ProductList</h3>
            <ul>
                <Link to='/ProductList/detail/1'><li>商品1</li></Link>
                <Link to='/ProductList/detail/2'><li>商品2</li></Link>
            </ul>
        </div>
    )
}
function ProductDetail({ match, history, location }) {
    console.log(match, history, location)
    return (
        <div>
            商品详情{match.params.name}
        </div>
    )
}
@connect(
    (state) => ({ isLogin: state.user.isLogin }),
    {
        // login:()=>({type:'login', payload:'zero'}),
        // logout:()=>({type:'logout'}),
        // login,
        //logout
    }
)
class ProductMgt extends Component {
    render() {
        return (
            <div>
                <h3>ProductMgt</h3>
                <nav>
                    <Link to={this.props.match.url + '/add'}><span>Add Product</span></Link>
                    <Link to={this.props.match.url + '/search'}><span>Search Product</span></Link>
                </nav>
                <Route children={prop => '我是固定占位栏'}></Route>
                <Route children={prop => null} render={props => 'test children'}></Route>
                <div>
                    <Route path='/ProductMgt/add' render={() => '添加商品'}></Route>
                    <Route path='/ProductMgt/search' render={() => '搜索商品'}></Route>
                </div>
                {/* <button onClick={() => {
                    this.props.logout()
                    this.props.history.push('/login')
                }}>退出登录</button> */}
            </div>
        )
    }
}
const mgLeft = {
    marginLeft: '15px'
}
function PrivateRoute({ component: Comp, isLogin, ...rest }) { //规范中无法使用小写作为组件，所以给参数起个别名
    console.log(isLogin)
    return (<Route {...rest} render={(props) => {
        console.log('in private=================');
        return (
            isLogin ? (
                <Comp {...props} />
            ) : (
                    <Redirect to={{ pathname: '/login', state: { from: props.location.pathname } }}></Redirect>
                ))
    }
    }></Route>)
}
const Login = connect(
    state => ({
        isLogin: state.user.isLogin,
        loading: state.user.loading,
        error: state.user.error // 登录错误信息
    }),
    { 
        login: () => ({ type: 'login', payload: 'zero' }),
    }
)(({ location, isLogin, login, loading, error }) => {// 登录错误信息
    const redirect = location.state.from|| "/";
    // 若已登陆重定向至redirect
    if (isLogin) return <Redirect to={redirect} />;
    return (
        <div>
            <p>用户登录</p>
            <hr />
            {/* 显示错误信息 */}
            {error && <p>{error}</p>}
            {/* 登录传参 */}
            <button onClick={() => login('Jerry')} disabled={loading}>
                {loading ? "登录中..." : "登录"}
            </button>
        </div>
    );
});

@connect(
    (state) => ({ isLogin: state.user.isLogin }),
    {
        login: () => ({ type: 'login', payload: 'zero' }),
        // logout:()=>({type:'logout'}),
        // login,
        // logout
    }
)
class ReactRouterTest extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (<BrowserRouter>
            {'11111111111'}{'' + this.props.isLogin}
            <nav>
                <Link to='/Home'><span>Home</span></Link>
                <Link to='/ProductList'><span style={mgLeft}>ProductList</span></Link>
                <Link to='/ProductMgt'><span style={mgLeft}>ProductMgt</span></Link>
            </nav>
            <Switch>
                {/* <Redirect exact from='/' to='/Home'></Redirect> */}
                <Route path='/Home' render={props => ('currUrl=' + props.location.pathname)}></Route>
                <Route exact path='/ProductList' component={ProductList}></Route>
                <Route path='/ProductList/detail/:name' component={ProductDetail}></Route>
                {/* <Route path='/ProductMgt' component={ProductMgt}></Route> */}
                <PrivateRoute path='/ProductMgt' isLogin={this.props.isLogin} component={ProductMgt}></PrivateRoute>
                {/* <Route path='/login' isLogin={this.props.isLogin} render={({ history, location }) => {
                    return (
                        <button onClick={() => {
                            if (this.props.isLogin) return <Redirect to={(location.state && location.state.from) || '/ProductMgt'}></Redirect>
                            this.props.login()
                            // if(location.state) history.push(location.state.from)
                            // else history.push('/ProductMgt')
                        }}>登录</button>
                    )
                }}></Route> */}
                <Route path='/login' component={Login}></Route>
                <Route render={props => '404'}></Route>
            </Switch>
        </BrowserRouter>)
    }
}
export default ReactRouterTest;