import React, {Component} from 'react'
import './style.css'

class Datapicker extends Component{
    state = {
        reverted: false,
        muns: ["Янв","Февр","Март","Апр","Май","Июнь","Июль","Авг","Сент","Окт","Нояб","Декб"],
        montsInt: new Date().getMonth(),
        year: new Date().getFullYear(),
        dataNow: new Date().getDate(),
        dataСhoice: 0,
        seachText: ""

    }

    elementMassText(date){
        if(localStorage.getItem('dateInformation')!==null){
        let elem = localStorage.getItem('dateInformation');
        let arr = JSON.parse(elem);
        let date1 = new Date(date);
        for (let index = 0; index < arr.length; index++) {
            let dateIn = new Date(arr[index].date);
            if((dateIn.getMonth()===date1.getMonth())&&(dateIn.getDate()===date1.getDate())&&(dateIn.getFullYear()===date1.getFullYear())){
                    return arr[index].text;
                }
            
            console.log(dateIn+"<>"+date1);
        }
        }
    return "";
    }
    
    calendarDay = () =>{
        let day_in_month_etot = 32 - new Date(this.state.year, this.state.montsInt, 32).getDate();
        let day_in_month_pered = 32 - new Date(this.state.year, this.state.montsInt-1, 32).getDate();
        let weakDay = new Date(this.state.year, this.state.montsInt, 1).getDay();
        let mass = [];
        if(weakDay===0){
            weakDay=7;
        }

        //console.log("weakDay"+weakDay);
        //console.log("day_in_month_etot"+day_in_month_etot);
       // console.log("day_in_month_pered"+day_in_month_pered);
        day_in_month_pered = day_in_month_pered - (weakDay-2);
        //var date = new Date(this.state.year, this.state.montsInt, ); данные для ежедневника
        for (let index = 0; index < weakDay-1; index++) {
            mass.push({"name": "", text: ""}); 
            day_in_month_pered++;
        }

        for (let index = 1; index < day_in_month_etot+1; index++) {
                mass.push({"name": index, text: this.elementMassText(new Date(this.state.year, this.state.montsInt, index))  }); 
        }
        for (let index = 1; index < 43-(day_in_month_etot+weakDay-1); index++) {
            mass.push({"name": "", text:"" }); 
            
        }
        return mass;
    };
    addText = (param,d)=>{
        console.log(d.name);
        this.setState({
            dataСhoice: d.name
        });
    }
    nextMonts = () =>{
        if(this.state.montsInt===11){
            this.setState({
                montsInt: 0,
                year: this.state.year + 1
            });
            
        }else{
            this.setState({
                montsInt: this.state.montsInt+1,
            });
        }
    }
    prevMonts = () =>{
        if(this.state.montsInt===0){
            this.setState({
                montsInt: 11,
                year: this.state.year -1
            });
        }else{
            this.setState({
                montsInt: this.state.montsInt-1
            });
        }
    }
    addNewText = () => {
        let logick = this.state.dataСhoice;
        if(logick===""){
            logick = 0;
        }
        if(logick!==0){
            var result = prompt("Событие", "");
            var date = new Date(this.state.year,this.state.montsInt,this.state.dataСhoice);
            let appDateInformation = [];
            
            appDateInformation = JSON.parse(localStorage.getItem('dateInformation'));

                if(appDateInformation===null){

                    appDateInformation = [];

                }
            if(result!==""){
                appDateInformation.push({"date":date, "text": result});
                localStorage.setItem('dateInformation', JSON.stringify(appDateInformation));
            }
            this.forceUpdate();
        }else{
            alert("Не выбрана дата, для выбора нажмите на нужную дат мышью");
        }

    }

    updateText = () =>{
        if(this.state.dataСhoice!==0){
            var result = prompt("title", this.elementMassText(new Date(this.state.year, this.state.montsInt, this.state.dataСhoice)));
            var date = new Date(this.state.year,this.state.montsInt,this.state.dataСhoice);
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
                        }
                    
                  //  console.log(dateIn+"<>"+date1);
                }
           // appDateInformation.push({"date":date, "text": result});
            localStorage.setItem('dateInformation', JSON.stringify(appDateInformation));
            this.forceUpdate();
        }else{
            alert("Пока не выбрана дата");
        }
    }
    updateinputLogin = (evt) =>{
        this.setState({
            seachText: evt.target.value
        });
    }
    nowClick = () =>{
        alert('Не сказано что делать при нажатии');
    }
    nekoeDeistvie = () => {
        alert('Не сказано как делать поиск');
    }

    render(){
        const listItems = this.calendarDay().map((d) => 
            <button className="calendarDay" style={d.text? {background: 'rgb(0, 183, 255)'}:{background: 'none'}} key={d.id} onClick={(e)=>this.addText(e,d)} >
                <h6>{d.name}</h6> 
                <p>{d.text}</p>
            </button>);
        return(
            <div className="calendarPadding">
                <button onClick={(e)=>this.addNewText(e,"")} className="addButton">Добавить</button>
                <button onClick={(e)=>this.updateText(e,"")} className="updateButton">Обновить</button>
                <div className="divSeach">
                    <button onClick={this.nekoeDeistvie} className = "buttonSeach">&#128270;</button>
                    <input value={this.state.inputLogin} onChange={evt => this.updateinputLogin(evt)} type="text" placeholder="Событие, дата или участник"/>
                </div>
                <div className="flexH">
                    <button onClick={this.prevMonts} className="callendarButton">&#9668;</button>
                    <h4 >{this.state.muns[this.state.montsInt]+" "+this.state.year}</h4>
                    <button onClick={this.nextMonts} className="callendarButton">&#9658;</button>  
                    <button onClick={this.nowClick} className="callendarButtonNow">Сегодня</button>
                </div>
                    <div>
                            <div className="divWeak">Понедельник</div>
                            <div className="divWeak">Вторник</div>
                            <div className="divWeak">Среда</div>
                            <div className="divWeak">Четверг</div>
                            <div className="divWeak">Пятница</div>
                            <div className="divWeak">Суббота</div>
                            <div className="divWeak">Воскресенье</div> 
                        <br/>
                        <br/>
                        <div className="listItem"> 
                            {listItems}
                        </div>   
                    </div>
            </div>
            )
    }

}

export default Datapicker