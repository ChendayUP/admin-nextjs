import { useEffect } from 'react'
import * as echarts from 'echarts'

type Props = {
  title: string
  data: { name: string; data: { time: string; value: number }[] }[]
}

const Line = (props: Props) => {
  let { title, data } = props

  const getDaysList = () => {
    // 生成最近10天日期数组
    const now = new Date() // 当前日期
    const dates = []

    for (let i = 0; i < 7; i++) {
      const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000)
      dates.push(date.toISOString().split('T')[0] + ' 00:00:00')
    }
    console.log(dates)
    return dates
  }

  const initChart = () => {
    let element = document.getElementById('line-chart')
    let myChart = echarts.init(element)
    myChart.clear()
    let option = {
      // title: {
      //   text: 'Stacked Line'
      // },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: data.map((item) => item.name),
        type: 'scroll'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'time',
        minInterval: 3600 * 1000 * 24,
        axisLabel: {
          show: true,
          symbolSize: 10,
          formatter: '{MM}-{dd}',
          rotate: 30,
          margin: 13
        }
      },
      yAxis: {
        type: 'value',
        name: '℃',
        // nameLocation : 'start',
      },
      calculable: true,
      series: data.map((item) => {
        return {
          name: item.name,
          type: 'line',
          stack: 'Total',
          showSymbol: false,
          data: item.data.map(item => [item.time,item.value]),
          markPoint: {
            symbol: 'path://m 0,0 h 48 v 20 h -18 l -6,5 l -6,-5 h -18 z;',
            symbolSize: [34, 20],
            symbolOffset: [0, -14],
            // itemStyle: {
            //   color: 'red' 
            // },
            // label: {
            //   backgroundColor: 'blue'
            // },
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' }
            ]
          },
          // itemStyle: {
          //   color: 'red'
          // }  
        }
      })
    }
    option && myChart.setOption(option)
  }

  useEffect(() => {
    initChart()
  }, [])

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div id="line-chart" style={{ width: '100%', height: '100%' }}></div>
    </div>
  )
}

export default Line
