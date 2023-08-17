import { useEffect } from 'react'
import * as echarts from 'echarts'

type Props = {
  title: string
  data: { value: number; name: string }[]
}

const Pie = (props: Props) => {
  let { title, data } = props
  const initChart = () => {
    let element = document.getElementById('pie-chart')
    let myChart = echarts.init(element)
    myChart.clear()
    let option = {
      title: {
        text: '报警总数',
        left: 'center',
        top: '50%',
        textStyle: {
          color: '#27D9C8',
          fontSize: 18,
          align: 'center',
        },
      },
      graphic: {
        type: 'text',
        left: 'center',
        top: '40%',
        style: {
          text: '66个',
          textAlign: 'center',
          fill: '#333',
          fontSize: 18,
          fontWeight: 700,
        },
      },
      // title: {
      //   text: '',
      //   subtext: '',
      //   left: 'center'
      // },
      tooltip: {
        trigger: 'item',
      },

      // legend: {
      //   orient: 'vertical',
      //   left: 'left'
      // },
      series: [
        {
          name: title,
          type: 'pie',
          radius: ['50%', '70%'],
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
          label: {
            alignTo: 'edge',
            formatter: '{name|{b}}\n\n{time|{c}个}',
            minMargin: 10,
            edgeDistance: 10,
            lineHeight: 15,
            rich: {
              time: {
                fontSize: 16,
                color: '#999'
              }
            }
          },
          labelLayout: function (params) {
            const isLeft = params.labelRect.x < myChart.getWidth() / 2;
            const points = params.labelLinePoints;
            // Update the end point.
            points[1][1] = points[1][1] - 2 // 标签引导线第二个点 y轴
            points[2][1] = points[2][1] - 2 // 标签引导线第三个点 y轴
            points[2][0] = isLeft  // 标签引导线第三个点 x轴
              ? params.labelRect.x
              : params.labelRect.x + params.labelRect.width;
            return {
              labelLinePoints: points
            };
          },
          // label: {
          //   normal: {
          //     show: false,
          //     position: 'center',
          //     formatter: function () {
          //       return ' 66个\r\n 报警总数'
          //     },
          //     textStyle: {
          //       fontSize: 18,
          //       color: '#666',
          //     },
          //   },
          //   emphasis: {
          //     show: true,
          //     // textStyle: {
          //     //   fontSize: '30',
          //     //   fontWeight: 'bold',
          //     // },
          //   },
          // },
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

export default Pie
