import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

export default class LineChart extends Component{
  constructor(props){
    super(props);
    }


  static defaultProps = {
    displayLegend:false
  }

  render(){
    return(
    <div className="Chart">
    <Line
      data={this.props.LineChartData}
      options={{
        title:{
        display:true,
        text:this.props.LineChartSrc + " POPULARITY OVER PAST 5 YEARS",
        fontSize:25
      },
        legend:{
          display:this.props.displayLegend
        }
      }} />
    </div>
  )
  }
}
