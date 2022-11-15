import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip, TrackLineSettings } from '@syncfusion/ej2-react-charts' 

const SparkLine = ({currentColor, id, type, height, width, data, color }) => {
  return (
    <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
      border={{ color: currentColor, width: 2 }}
      xName='x'
      yName='yval'
      type={type}
      tooltipSettings={{
        visible: true,
        format: '${xval}: data ${yval}',
        trackLineSettings: {
          visible: true
        }
      }}
      dataSource={[
        { x: 0, xval: 1, yval: 2 },
        { x: 1, xval: 2, yval: 6 },
        { x: 2, xval: 3, yval: 8 },
        { x: 3, xval: 4, yval: 5 },
        { x: 4, xval: 5, yval: 10 },
      ]}
        
    >
      <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
  )
}

export default SparkLine