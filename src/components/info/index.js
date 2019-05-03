import React, {Component} from 'react'
import './style.css'

class Info extends Component{
    state = {
        reverted: false
    }
    render(){

        return(
            <div>
                <h1>Info</h1>
                    <button>Добавить</button>
                    <button>Обновить</button>
                    <div>
                        <div className="divWeak">Понедельник</div>
                        <div className="divWeak">Вторник</div>
                        <div className="divWeak">Среда</div>
                        <div className="divWeak">Четверг</div>
                        <div className="divWeak">Пятница</div>
                        <div className="divWeak">Суббота</div>
                        <div className="divWeak">Воскресенье</div>
                        
                    </div>
                </div>
                
        )
    }

}

export default Info