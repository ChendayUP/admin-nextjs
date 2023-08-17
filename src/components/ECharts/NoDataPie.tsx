import { useEffect } from 'react'
import * as echarts from 'echarts'
import complete from '/public/static/images/complete.png';


type Props = {
  title: string
}

const NoDataPie = (props: Props) => {
  console.log("complete", complete)
  let { title } = props
  const initChart = () => {
    let element = document.getElementById('pie-chart')
    let myChart = echarts.init(element)
    myChart.clear()
    let option = {
      title: {
        text: '无报警',
        left: 'center',
        top: '50%',
        textStyle: {
          color: '#27D9C8',
          fontSize: 18,
          align: 'center',
        },
      },
      graphic: {
        type: 'image',
        style: {
          image: require('/public/static/images/complete.png'), // 你的图片地址
          width: 42,
          height: 46,
          color: '#fff',
        },
        left: 'center',
        top: '40%',
      },
      // title: {
      //   text: '',
      //   subtext: '',
      //   left: 'center'
      // },
      // tooltip: {
      //   trigger: 'item',
      // },

      // legend: {
      //   orient: 'vertical',
      //   left: 'left'
      // },
      series: [
        {
          name: title,
          type: 'pie',
          radius: ['50%', '70%'],
          data: [{ value: 1, name: '无报警' }],
          emphasis: {
            show: false,
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
          label: {
            show: false,
            alignTo: 'edge',
            formatter: '{name|{b}}\n\n{time|{c}个}',
            minMargin: 10,
            edgeDistance: 10,
            lineHeight: 15,
            rich: {
              time: {
                fontSize: 16,
                color: '#999',
              },
            },
          },
        },
      ],
    }
    option && myChart.setOption(option)
  }

  useEffect(() => {
    initChart()
  }, [])

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div id="pie-chart" style={{ width: '100%', height: '100%' }}></div>
    </div>
  )
}

export default NoDataPie
