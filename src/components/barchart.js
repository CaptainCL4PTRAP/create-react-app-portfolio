import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

export default class BarChart extends Component{
  constructor(props){
    super(props);
      this.state = {
        chartData:props.chartData
      };
    }


  static defaultProps = {
    displayLegend:false
  }


  render(){
    return(
    <div className="Chart">
    <Bar

      data={this.state.chartData}
      options={{
        onClick: (evt, item)=>{
            try{
          this.props.Setter(item[0]._view.label);
                }
            catch{
              console.log("Undefined Touch");
            }

        },
        responsive:true,
        title:{
        display:true,
        text:'POPULAR FRAMEWORKS IN 2019',
        fontSize:25
      },
        legend:{
          display:this.props.displayLegend
        },

      }} />
    </div>
  )
  }
}
