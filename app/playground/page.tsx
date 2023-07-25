'use client';

import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
import Chart from './chart';


const data = [
  {
    category: 'Water Intake',
    stat: '20',
    // data: app
  }
];

export default function PlaygroundPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
        {data.map((item) => (
          <Card key={item.category}>
            <Title>{item.category}</Title>
            <Flex
              justifyContent="start"
              alignItems="baseline"
              className="space-x-2"
            >
              <Metric>{item.stat}</Metric>
              <Text>cups</Text>
            </Flex>
          </Card>
        ))}
      </Grid>
      <Chart />
    </main>
  );
}
