import React from 'react'
import Chart from 'react-google-charts'

class PieChart extends React.Component {
  render() {
    return (
      <Chart
        width={300}
        height={300}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Name', 'Gender', 'Age', 'Donuts eaten'],
          ['Michael', 'Male', 12, 5],
          ['Elisa', 'Female', 20, 7],
          ['Robert', 'Male', 7, 3],
          ['John', 'Male', 54, 2],
          ['Jessica', 'Female', 22, 6],
          ['Kylie', 'NonBinary', 22, 2],
          ['Aaron', 'Male', 3, 1],
          ['Margareth', 'Female', 42, 8],
          ['Laurie', 'NonBinary', 32, 2],
        ]}
        options={{
          legend: 'none',
          chartArea: { left: 15, top: 15, right: 0, bottom: 0 },
          pieSliceText: 'label',
        }}
        rootProps={{ 'data-testid': '1' }}
        chartWrapperParams={{ view: { columns: [0, 3] } }}
        chartPackages={['corechart', 'controls']}
        controls={[
          {
            controlEvents: [
              {
                eventName: 'statechange',
                callback: ({ chartWrapper, controlWrapper }) => {
                  alert(
                    'State changed to ' + JSON.stringify(controlWrapper.getState()),
                  )
                },
              },
            ],
            controlType: 'CategoryFilter',
            options: {
              filterColumnIndex: 1,
              ui: {
                labelStacking: 'vertical',
                label: 'Gender Selection:',
                allowTyping: false,
                allowMultiple: false,
              },
            },
          },
        ]}
      />
    )
  }
}

export default PieChart