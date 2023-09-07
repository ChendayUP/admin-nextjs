import { useEffect } from 'react'
import * as echarts from 'echarts'

type Props = {
  title: string
  data: { value: number; name: string; gradientColor?: string[] }[]
}

const Pie = (props: Props) => {
  let { title, data } = props
  const initChart = () => {
    let element = document.getElementById('pie-chart')
    let myChart = echarts.init(element)
    myChart.clear()
    let colorList = ['#14AE9F', '#14E9E7', '#E0A635']
    let gradientColor = [
      ['rgba(20, 174, 159, 1)', 'rgba(5, 65, 64, 1)'],
      ['rgba(22, 252, 249, 0)', 'rgba(22, 252, 249, 1)'],
      ['rgba(224, 166, 53, 0)', 'rgba(224, 166, 53, 1)'],
    ]
    data = data.map((item, index) => {
      return {
        ...item,
        gradientColor: gradientColor[index],
      }
    })
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
      tooltip: {
        trigger: 'item',
      },
      series: [
        {
          name: title,
          type: 'pie',
          radius: ['50%', '70%'],
          color: colorList,
          data: data.map((item) => {
            return {
              ...item,
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                  { offset: 0, color: item.gradientColor[0] },
                  { offset: 1, color: item.gradientColor[1] },
                ]),
                shadowBlur: 20,
                shadowColor: 'rgba(0, 0, 0, 0.3)',
              },
              label: {
                alignTo: 'edge',
                minMargin: 10,
                edgeDistance: 10,
                lineHeight: 15,
                formatter: '{name|{b}}\n\n{time|{c}个}',
                rich: {
                  time: {
                    fontSize: 14,
                    color: '#fff',
                  },
                },
                show: true,
                color: item.gradientColor[1],
              },
              labelLine: {
                lineStyle: {
                  color: item.gradientColor[1],
                },
              },
            }
          }),
          labelLayout: function (params) {
            const isLeft = params.labelRect.x < myChart.getWidth() / 2
            const points = params.labelLinePoints
            // Update the end point.
            points[1][1] = points[1][1] - 2 // 标签引导线第二个点 y轴
            points[2][1] = points[2][1] - 2 // 标签引导线第三个点 y轴
            points[2][0] = isLeft // 标签引导线第三个点 x轴
              ? params.labelRect.x
              : params.labelRect.x + params.labelRect.width
            return {
              labelLinePoints: points,
            }
          },
        },
      ],
    }
    myChart.setOption(option)
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
