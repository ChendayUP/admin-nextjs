import { useEffect } from 'react'
import * as echarts from 'echarts'

type Props = {
  title: string,
  selectList: string[],
  data: { name: string; data: { time: string; value: number }[] }[]
}

const Line = (props: Props) => {
  let { title, data, selectList } = props

  // const getDaysList = () => {
  //   // 生成最近10天日期数组
  //   const now = new Date() // 当前日期
  //   const dates = []

  //   for (let i = 0; i < 7; i++) {
  //     const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000)
  //     dates.push(date.toISOString().split('T')[0] + ' 00:00:00')
  //   }
  //   console.log(dates)
  //   return dates
  // }
  const dataList = data.map((item) => item.name)
  const getSelectList = () => {
    let map = {}
    dataList.forEach((item) => {
      if (selectList.includes(item)) {
        map[item] = true
      } else {
        map[item] = false
      }
    })
    return map
  }
  console.log('getSelectList', getSelectList())
  const initChart = () => {
    let element = document.getElementById('line-chart')
    let myChart = echarts.init(element)
    myChart.clear()
    let option = {
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: dataList,
        selected: getSelectList(), // 选中的数据,示例: { 'H01': true, 'H02': false } true 选中, false 未选中
        type: 'scroll',
        textStyle: {
          color: '#fff' 
        }
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
          margin: 13,
          color: '#fff', // 红色

        }
      },
      yAxis: {
        type: 'value',
        name: '℃',
        nameTextStyle: {
          color: '#fff', // 红色
        },
        axisLabel: {
          color: '#fff', // 红色
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed'    // 刻度线类型
          }
        }
      },
      calculable: true,
      series: data.map((item) => {
        return {
          name: item.name,
          type: 'line',
          showSymbol: false,
          data: item.data.map(item => [item.time,item.value]),
          markPoint: {
            symbol: 'path://m 0,0 h 48 v 20 h -18 l -6,5 l -6,-5 h -18 z;',
            symbolSize: [34, 20],
            symbolOffset: [0, -14],
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' }
            ]
          },
          markLine: {
            lineStyle: {
              type: 'dashed'
            },
          }
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
