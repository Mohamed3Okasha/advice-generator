import React, {useState, useEffect} from "react";
import './style/App.css';
// import desktopline from './assets/images/pattern-divider-desktop.svg'
import axios from 'axios';

const App = () => {
    const [count, setCount] = useState(0);
    const [advice, setAdvice] = useState({
        number: 'default',
        content: 'default'
    });

    useEffect(async () =>{
        document.title = 'Advice Generator';
        const {data} = await axios.get('http://api.adviceslip.com/advice');
        console.log('Advice slip:', data.slip.id);

        //clone
        const cloneAdvice = {...advice};
        //edit
        cloneAdvice.number = data.slip.id;
        cloneAdvice.content = data.slip.advice;
        //setState
        setAdvice(cloneAdvice);
    }, [count]);
    
    // document.addEventListener('DOMContentLoaded', () => {
        let icon = document.querySelector('#iconimg');
        // console.log('count', icon);

        let changeAdvice = ()=> {
            setCount(count + 1);
            // console.log('count', count);
        };

    return (
        <React.Fragment>
            <main>
                <div className="container">
                    
                <div id='card'>
                    <p>Advice # {advice.number}</p>
                    <q>{advice.content}</q>
                    <img src="" alt="" id="lineimg"/>
                    <br />
                    <span onClick={changeAdvice}>
                        <img src="" alt="" id="iconimg"/>
                    </span>
                </div>
                </div>
            </main>
        </React.Fragment>
     );
}

export default App;