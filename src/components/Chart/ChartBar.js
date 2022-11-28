import React from 'react';
const ChartBar = (props) => {
  let barFullHeight = '0%';
  if (props.max > 0) {
    barFullHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar_inner">
        <div class="chart-bar_fill" style={{ height: barFullHeight }}></div>
      </div>
      <div className="chart-bar_label">{props.label}</div>
    </div>
  );
};
export default ChartBar;
