import React, {Component} from 'react'
import './style.css'

class Diary extends Component{
    constructor(props){
        super(props);
        this.state = {
            reverted: false,
            month: ['Янв','Февр','Март','Апр','Май','Июнь','Июль','Авг','Сент','Окт','Нояб','Декб'],
            monthInt: new Date().getMonth(),
            year: new Date().getFullYear(),
            dataNow: new Date().getDate(),
            dataChoice: 0,
            searchText: ''
        }
    
    }
    
    checkDate(dateIn, date1){
        if((dateIn.getMonth()===date1.getMonth())&&(dateIn.getDate()===date1.getDate())&&(dateIn.getFullYear()===date1.getFullYear())){
            return true;
        }
        return false;
    }

    elementMassText(date){
        if(localStorage.getItem('dateInformation')!==null){
            let elem = localStorage.getItem('dateInformation');
            let arr = JSON.parse(elem);
            if(arr===null){
                arr = [];
            }
            let date1 = new Date(date);
            for (let index = 0; index < arr.length; index++) {
                let dateIn = new Date(arr[index].date);
                if(this.checkDate(dateIn, date1)){
                        return arr[index].text;
                }
            }
        }
    return '';
    }
    
    calendarDay = () =>{
        let dayInMonthThis = 32 - new Date(this.state.year, this.state.monthInt, 32).getDate();
        let dayInMonthPrev = 32 - new Date(this.state.year, this.state.monthInt-1, 32).getDate();
        let weakDay = new Date(this.state.year, this.state.monthInt, 1).getDay();
        let mass = [];
        if(weakDay===0){
            weakDay=7;
        }

        dayInMonthPrev = dayInMonthPrev - (weakDay-2);
        for (let index = 0; index < weakDay-1; index++) {
            mass.push({'name': '', text: ''}); 
            dayInMonthPrev++;
        }

        for (let index = 1; index < dayInMonthThis+1; index++) {
                mass.push({'name': index, text: this.elementMassText(new Date(this.state.year, this.state.monthInt, index))  }); 
        }
        for (let index = 1; index < 43-(dayInMonthThis+weakDay-1); index++) {
            mass.push({'name': '', text:'' }); 
            
        }
        return mass;
    };
    addText = (param,d)=>{
        this.setState({
            dataChoice: d.name
        });
    }
    nextMonts = () =>{
        if(this.state.monthInt===11){
            this.setState({
                monthInt: 0,
                year: this.state.year + 1
            });
            
        }else{
            this.setState({
                monthInt: this.state.monthInt+1,
            });
        }
    }
    prevMonts = () =>{
        if(this.state.monthInt===0){
            this.setState({
                monthInt: 11,
                year: this.state.year -1
            });
        }else{
            this.setState({
                monthInt: this.state.monthInt-1
            });
        }
    }
    addNewText = () => {
        let logick = this.state.dataChoice;
        if(logick===''){
            logick = 0;
        }
        if(logick!==0){
            var result = prompt('Событие', '');
            var date = new Date(this.state.year,this.state.monthInt,this.state.dataChoice);
            let appDateInformation = [];
            
            appDateInformation = JSON.parse(localStorage.getItem('dateInformation'));

                if(appDateInformation===null){

                    appDateInformation = [];

                }
            if(result!==''){
                appDateInformation.push({'date':date, 'text': result});
                localStorage.setItem('dateInformation', JSON.stringify(appDateInformation));
            }
            this.setState({
                dataChoice: 0
            });
        }else{
            alert('Не выбрана дата, для выбора нажмите на нужную дат мышью');
        }

    }

    updateText = () =>{
        if(this.state.dataChoice!==0){
            var result = prompt('title', this.elementMassText(new Date(this.state.year, this.state.monthInt, this.state.dataChoice)));
            var date = new Date(this.state.year,this.state.monthInt,this.state.dataChoice);
            let appDateInformation = [];
            
            appDateInformation = JSON.parse(localStorage.getItem('dateInformation'));

                if(appDateInformation===null){

                    appDateInformation = [];

                }
                let date1 = new Date(date);
                let arr = appDateInformation;
                for (let index = 0; index < arr.length; index++) {
                    let dateIn = new Date(arr[index].date);
                    if((dateIn.getMonth()===date1.getMonth())&&(dateIn.getDate()===date1.getDate())&&(dateIn.getFullYear()===date1.getFullYear())){
                            arr[index].text = result;
                        };
                }
            localStorage.setItem('dateInformation', JSON.stringify(appDateInformation));
           // this.forceUpdate();
        }else{
            alert('Пока не выбрана дата');
        }
    }
    updateinputLogin = (evt) =>{
        this.setState({
            searchText: evt.target.value
        });
    }
    nowClick = () =>{
        alert('Не сказано что делать при нажатии');
    }
    
    someAction = () => {
        alert('Не сказано как делать поиск');
    }

    listItemsFunc(){
        return this.calendarDay().map((d) => 
        <button className='calendarDay' style={d.text? {background: 'rgb(0, 183, 255)'}:{background: 'none'}} key={d.id} onClick={(e)=>this.addText(e,d)} >
            <h6>{d.name}</h6> 
            <p>{d.text}</p>
        </button>);
    }

    render(){
        const listItems = this.listItemsFunc();
        return(
            <div className='calendarPadding'>
                <button onClick={(e)=>this.addNewText(e,'')} className='addButton'>Добавить</button>
                <button onClick={(e)=>this.updateText(e,'')} className='updateButton'>Обновить</button>
                <div className='divSeach'>
                    <button onClick={this.someAction} className = 'buttonSeach'>&#128270;</button>
                    <input value={this.state.inputLogin} onChange={evt => this.updateinputLogin(evt)} type='text' placeholder='Событие, дата или участник'/>
                </div>
                <div className='flexH'>
                    <button onClick={this.prevMonts} className='callendarButton'>&#9668;</button>
                    <h4 >{this.state.month[this.state.monthInt]+' '+this.state.year}</h4>
                    <button onClick={this.nextMonts} className='callendarButton'>&#9658;</button>  
                    <button onClick={this.nowClick} className='callendarButtonNow'>Сегодня</button>
                </div>
                    <div>
                            <div className='daysOfTheWeek'>Понедельник</div>
                            <div className='daysOfTheWeek'>Вторник</div>
                            <div className='daysOfTheWeek'>Среда</div>
                            <div className='daysOfTheWeek'>Четверг</div>
                            <div className='daysOfTheWeek'>Пятница</div>
                            <div className='daysOfTheWeek'>Суббота</div>
                            <div className='daysOfTheWeek'>Воскресенье</div> 
                        <br/>
                        <br/>
                        <div className='listItem'> 
                            {listItems}
                        </div>   
                    </div>
            </div>
            )
    }

}

export default Diary