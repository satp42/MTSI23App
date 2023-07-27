'use client';

import { Card, Metric, Text, Title, Flex, Grid } from '@tremor/react';
import Image from 'next/image';
import Chart from './chart';

const data = [
  {
    category: 'Water Intake',
    liquid: 24,
    title: 'Sip Count',
    sips: 7
  }
];

export default function PlaygroundPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Grid numItemsSm={2} numItemsLg={3} className="gap-6 h-auto grid-auto-rows-fr">
        {data.map((item) => (
          <>
            <Card key={item.category} className="flex flex-col">
              <Title className='text-xl'>{item.category}</Title>
              <Text className='pb-4'>Track how much water you drank today</Text>
              <Flex
                justifyContent="center"
                alignItems="baseline"
                className="self-center pb-2"
              >
                <Metric className='text-6xl px-2'>{item.liquid}</Metric>
                <Text>cups</Text>
              </Flex>
            </Card>
            <Card key={item.title} className="flex flex-col">
              <Title className='text-xl'>{item.title}</Title>
              <Text className='pb-4'>Track how many sips you took today</Text>
              <Flex
                justifyContent="center"
                alignItems="baseline"
                className="self-center pb-2"
              >
                <Metric className='text-6xl'>{item.sips}</Metric>
                <Text>sips</Text>
              </Flex>
            </Card>
            <Card className="flex flex-col">
              <Title className='text-xl'>Your Plant</Title> 
              <Text className=''>Keep your plant healthy by drinking water</Text>
              <Flex
                justifyContent="center"
                alignItems="baseline"
                className="self-center"
              >
                {item.liquid < 23 && (<Image src="/img/3.png" alt="image-for-less-than-23" width={100} height={150} />)}
                {item.liquid >= 23 && (<Image src="/img/6.png" alt="image-for-less-than-23" width={100} height={150} />)}
              </Flex>
            </Card>
          </>
        ))}
      </Grid>
      <Chart />
    </main>
  );
}