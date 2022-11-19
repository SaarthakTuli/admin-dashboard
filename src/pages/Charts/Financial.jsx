import React from 'react'

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom, Inject } from '@syncfusion/ej2-react-charts';

import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy';

import { Header } from '../../components';

import { useStateContext } from '../../contexts/ContextProvider';

const date1 = new Date(2017, 1, 1);

function filterDate(value) {
  if (value.x >= date1) {
    return value.x, value.high, value.low;
  }
}

const filteredData = financialChartData.filter(filterDate)

const Financial = () => {

  const { currentMode } = useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header
        category='Chart'
        title='Financial'
      />

      <div className='w-full'>
        <ChartComponent
          id='financial-charts'
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true, shared: true }}
          crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject services={[HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]} />

          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={filteredData}
              xName='x'
              yName='low'
              name='Apple INC.'
              type='Hilo'
              low='low'
              high='high'
            />
          </SeriesCollectionDirective>
          </ChartComponent>
      </div>
    </div>
  )
}

export default Financial