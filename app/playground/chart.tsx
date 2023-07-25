'use client';

import { Card, AreaChart, Title, Text } from '@tremor/react';

const data = [
  {
    Month: 'Jan 21',
    'Your Intake': 10,
    'Leaderboard Average': 4
  },
  {
    Month: 'Feb 21',
    'Your Intake': 9,
    'Leaderboard Average': 11
  },
  {
    Month: 'Jan 22',
    'Your Intake': 20,
    'Leaderboard Average': 7
  }
];

export default function Example() {
  return (
    <Card className="mt-8">
      <Title>Weekly Intake</Title>
      <Text>Comparison between leaderboard average and your water intake</Text>
      <AreaChart
        className="mt-4 h-80"
        data={data}
        categories={['Your Intake', 'Leaderboard Average']}
        index="Month"
        colors={['indigo', 'fuchsia']}
        valueFormatter={(number: number) =>
          `${Intl.NumberFormat('us').format(number).toString()} cups`
        }
        yAxisWidth={60}
      />
    </Card>
  );
}