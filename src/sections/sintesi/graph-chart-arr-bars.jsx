import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { Bar, XAxis, YAxis, Legend, Tooltip, BarChart, CartesianGrid, ResponsiveContainer } from 'recharts';

const GraphChartArrBars = ({ data }) => {
  const chartData = useMemo(() => {
    if (!data || typeof data !== 'object') {
      console.log('Invalid data for CustomGraphChart');
      return [];
    }
  

    const formattedData = [];

    // Iterate through each time slot
    Object.keys(data).forEach(timeSlot => {
      // Create a data object for the current time slot
      const timeSlotData = { name: timeSlot };

      // Iterate through each radio station within the time slot
      Object.entries(data[timeSlot]).forEach(([radioStation, value]) => {
        // Convert the value to a number
        const numericValue = parseInt(value, 10);
        // Add the radio station and its numeric value to the data object
        timeSlotData[radioStation] = numericValue;
      });

      // Push the data object to the formattedData array
      formattedData.push(timeSlotData);
    });

    return formattedData;
  }, [data]);

  /* 
  const radioStationColors = {
    'RadioDeejay': '#E53935',
    'RAIRadio1': '#D81B60',
    'RAIRadio2': '#8E24AA',
    'RAIRadio3': '#5E35B1',
    'RAIIsoradio': '#3949AB',
    'RDS': '#1E88E5',
    'RTL': '#039BE5',
    'Radio24': '#00ACC1',
    'RadioM2O': '#00897B',
    'RADIOSUBASIO': '#43A047',
    'RADIOBELLAEMONELLA': '#C0CA33',
    'RADIOITALIAANNI60': '#FDD835',
    'RADIOKISSKISS': '#FFB300',
    'RADIOKISSKISSNAPOLI': '#FB8C00',
    'RADIOKISSKISSITALIA': '#F4511E',
    'RadioFRECCIA': '#6D4C41',
    'RadioIBIZA': '#757575',
    'RadioCapital': '#546E7A',
    'R101': '#26A69A',
    'VIRGINRadio': '#EC407A',
    'RADIOMONTECARLO': '#AB47BC',
    'Radio105': '#7E57C2',
    'RadioZETA': '#5C6BC0',
    'RadioBRUNO': '#42A5F5',
    'RadioItaliaSMI': '#29B6F6',
    'ALTRERADIO': '#AAAAAA'
  };
  
  */  
  const groups = {
    RAI: ["RAIRadio1", "RAIRadio2", "RAIRadio3", "RAIIsoradio"],
    MEDIASET: [ "Radio105", "R101", "RADIOSUBASIO", "VIRGINRadio"],
    GEDI: ["RadioDeejay","M2O","RadioCapital"]
    // Add more groups if needed
  };
  const radioGroupColors = {
    'RAI': '#0066CC',
    'MEDIASET': '#FF0000',
    'GEDI': '#ab47bc',
    'ALTRO': '#AAAAAA',
  }
  // Aggregate data by group
  const aggregatedChartData = chartData.map(dataPoint => {
    const aggregatedData = { name: dataPoint };
    
    Object.keys(groups).forEach(group => {
      // Sum the values for radio stations within each group
      aggregatedData[group] = groups[group].reduce((sum, radioStation) => sum + (dataPoint[radioStation] || 0), 0);
    });
    
    return aggregatedData;
  });
  // Generate bars for each radio station
  const bars = Object.keys(aggregatedChartData[0])
    .filter(key => key !== 'name') // Assuming 'name' is your XAxis key, remove it from bar generation
    .map((radioStation, index) => (
      <Bar key={radioStation} dataKey={radioStation} fill={radioGroupColors[radioStation]} />
    ));

  return (
    <ResponsiveContainer width="90%" height={400}>
    <BarChart data={aggregatedChartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis   domain={[0, 'dataMax + 100']} orientation="right" />
      <Tooltip />
      <Legend />
      {bars}
    </BarChart>
  </ResponsiveContainer>
  );
};
  // PropTypes validation
GraphChartArrBars.propTypes = {
    data: PropTypes.object.isRequired, // Validate userListeningMap as an object and is required
  };
  export default GraphChartArrBars;