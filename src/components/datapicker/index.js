import React, {Component} from 'react'
import './style.css'

class Datapicker extends Component{
    state = {
        reverted: false,
        muns: ["Янв","Февр","Март","Апр","Май","Июнь","Июль","Авг","Сент","Окт","Нояб","Декб"],
        montsInt: new Date().getMonth(),
        year: new Date().getFullYear(),
        dataNow: new Date().getDate(),
        dataСhoice: 0

    }
    
    calendarDay = () =>{
        let day_in_month = 32 - new Date(this.state.year, this.state.montsInt-1, 32).getDate();
        let day_in_month2 = 32 - new Date(this.state.year, this.state.montsInt-2, 32).getDate();
        let weakDay = new Date(this.state.year, this.state.montsInt, 1).getDay();
        let mass = [];
        day_in_month2 = day_in_month2 - 2;
        console.log(weakDay);
        for (let index = 0; index < weakDay-1; index++) {
            mass.push({"name": day_in_month2, text:textInDate }); 
            day_in_month2++;
        }

        for (let index = 1; index < day_in_month+2; index++) {

            if(index === 4){
                var textInDate = "ddfghgh fwgtrgrgtb wergd weftghwt"
            }else {
                textInDate = ""
            }
                mass.push({"name": index, text:textInDate }); 
        }
        for (let index = 1; index < 43-(day_in_month+weakDay); index++) {
            mass.push({"name": index, text:textInDate }); 
            
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
        
        if(this.state.dataСhoice!=0){
            var result = prompt("title", "");
            var date = new Date(this.state.year,this.state.montsInt,this.state.dataСhoice);
            let appDateInformation = [];
            appDateInformation.push(localStorage.getItem('dateInformation'));
            //appDateInformation
            appDateInformation.push({"date":date, "text": result});
            localStorage.setItem('dateInformation', appDateInformation);
        }else{
            alert("Пока не выбрана дата");
        }

        console.log(result);
    }
    render(){
        const listItems = this.calendarDay().map((d) => 
            <button className="calendarDay" style={d.text? {background: 'rgb(0, 183, 255)'}:{background: 'none'}} key={d.name} onClick={(e)=>this.addText(e,d)} >
                <h4>{d.name}</h4> 
                <h6>{d.text}</h6>
            </button>);
        return(
            <div className="calendarPadding">
                <button onClick={(e)=>this.addNewText(e,"")}>Добавить</button>
                <button className="callendarButton">Обновить</button>
                <div className="divSeach">
                    <button className = "buttonSeach">&#128270;</button>
                    <input value={this.state.inputLogin} onChange={evt => this.updateinputLogin(evt)} type="text"/>
                </div>
                <div className="flexH">
                    <button onClick={this.prevMonts} className="callendarButton">&#9668;</button>
                    <h4 >{this.state.muns[this.state.montsInt]+" "+this.state.year}</h4>
                    <button onClick={this.nextMonts} className="callendarButton">&#9658;</button>  
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