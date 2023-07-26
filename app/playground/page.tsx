'use client';

import { Card, Metric, Text, Title, Flex, Grid } from '@tremor/react';
import Image from 'next/image';
import Chart from './chart';

const data = [
  {
    category: 'Water Intake',
    stat: 20,
  }
];

export default function PlaygroundPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Grid numItemsSm={2} numItemsLg={2} className="gap-6 h-auto grid-auto-rows-fr">
        {data.map((item) => (
          <>
            <Card key={item.category} className="flex flex-col">
              <Title>{item.category}</Title>
              <Text>Track how much water you drank today</Text>
              <Flex
                justifyContent="start"
                alignItems="baseline"
                className="space-x-2"
              >
                <Metric>{item.stat}</Metric>
                <Text>cups</Text>
              </Flex>
            </Card>
            <Card className="flex flex-col">
              <Title>Your Plant</Title> 
              <Text>Keep your plant healthy by drinking water</Text>
              <Flex
                justifyContent="start"
                alignItems="baseline"
                className="space-x-2"
              >
                {/* <Image src="/img/3.png" alt="image-for-less-than-23" width={30} height={30} /> */}
              </Flex>
            </Card>
          </>
        ))}
      </Grid>
      <Chart />
    </main>
  );
}