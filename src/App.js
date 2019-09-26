
// export default class App extends Component {
//   render() {
//     return (
            // {this.props.title}
//         <JsxTest/>
//     )
//   }
// }
import React, {useState, useEffect} from 'react'
import JsxTest from './components/jsxTest';
import StateMgr from './components/StateMgr';
import EventHandle from './components/EventHandle';
import Lifecycle from './components/Lifecycle';
import LifecycleNew from './components/LifecycleNew';
import Favorite from './components/lesson2/Favorite';
import Counter from './components/lesson2/Counter';
import HocTest from './components/lesson2/HocTest';
import CounterHoc from './components/lesson2/CounterHoc';
import Composition from './components/lesson2/Composition';
import RadioComponsition from './components/lesson2/RadioComposition';
import HooksTest from './components/lesson2/HooksTest';
import ReduxTest from './components/react-all/ReduxTest';
import MyReduxTest from './components/react-all/MyReduxTest';
import {Button} from  'antd';
import "antd/dist/antd.css"
import MyReactReduxTest from './components/react-all/MyReactReduxTest';
import ReactRouterTest from './components/react-all/ReactRouterTest';

export default function App(props) {
  const [content, setContent] = useState('some content')
  useEffect(()=>{
    setTimeout(()=>{
      setContent('new content')
    },1000)
    return ()=>{}
  },[])
  return (
    <div>
      {/* <h1>{props.title}</h1> */}
      {/* <StateMgr /> */}
      {/* <EventHandle /> */}
      {/* <Lifecycle content={content} /> */}
      {/* <LifecycleNew content={content} /> */}
      {/* <JsxTest />      */}
      {/* <Favorite/> */}
      {/* <Counter/> */}
      {/* <HocTest /> */}
      {/* <CounterHoc /> */}
      {/* <Composition /> */}
      {/* <RadioComponsition /> */}
      {/* <HooksTest /> */}
      {/* <ReduxTest/> */}
      {/* <MyReduxTest/> */}
      {/* <MyReactReduxTest/> */}
      <ReactRouterTest></ReactRouterTest>
      {/* <Button>aaaa</Button> */}
    </div>
  )
}
