import React, { Fragment, useState } from 'react'
import { Button, Divider, List, Typography } from 'antd'

export default function AddCard() {
  const [data, setData] = useState([
    {
      title: '临边防护设备',
      list: [
        // {name: '临边防护设备1', key=}
      ],
    },
    {
      title: '大体积测温设备',
      list: [
        // {name: '大体积测温设备1'}
      ],
    },
    {
      title: '塔机设备',
      list: [
        // {name: '塔机设备1'}
      ],
    },
  ])

  function addItem(type: string) {
    let list = data.find((item) => item.title === type)?.list
    let randomKey = Math.random().toString(36).slice(-8)
    list?.push({ name: `${type}${list.length + 1}`, key: randomKey })
    setData([...data])
  }

  function onLoacation(item: any) {
    console.log(item)
  }

  return (
    <>
      {data.map((item, index) => {
        return (
          <Fragment key={index}>
            <Divider orientation="left">
              {item.title}
              <Button
                type="primary"
                className='bg-blue-700'
                style={{ marginLeft: '10px' }}
                onClick={() => addItem(item.title)}
              >
                添加
              </Button>
            </Divider>

            <List
              bordered
              dataSource={item.list}
              renderItem={(value) => (
                <List.Item>
                  {value.name}
                  <Button style={{ marginLeft: '10px' }} onClick={() => onLoacation(value)}>定位</Button>
                </List.Item>
              )}
            />
          </Fragment>
        )
      })}
    </>
  )
}
