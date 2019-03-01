import React, {Component} from 'react';
import {Polar} from 'react-chartjs-2';

export default class PieChart extends Component{
  constructor(props){
    super(props);
    }


  static defaultProps = {
    displayLegend:false
  }

  render(){
    return(
    <div className="Chart">
    <Polar
      data={this.props.PieChartData}
      options={{
        title:{
        display:true,
        text:this.props.PieChartSrc + " POPULARITY PER STATE",
        fontSize:25,
        maintainAspectRatio: false  },
        legend:{
          display:this.props.displayLegend
        }
      }} />
    </div>
  )
  }
}
