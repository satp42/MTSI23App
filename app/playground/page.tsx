'use client';

import { Card, Metric, Text, Title, Flex, Grid } from '@tremor/react';
import Image from 'next/image';
import Chart from './chart';
import axios from 'axios';
import { useEffect, useState, FC } from 'react';


export default function PlaygroundPage() {
  const [arduinoLiquid, setArduinoLiquid] = useState<number>(0);
  const [lastFetchTime, setLastFetchTime] = useState<string>(new Date().toISOString());

  // The function to handle POST requests
  const handlePostRequest = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/data', { liquid: 20 });

      if (response.status === 200) {
        setLastFetchTime(new Date().toISOString());  // Update 'lastFetchTime'
      }
    } catch (error) {
      console.error(`Error in POST request: ${error}`);
    }
  };

  // The function to fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/data');

        if (response.data && response.data.liquid) {
          setArduinoLiquid(response.data.liquid);  // Update 'arduinoLiquid'
          console.log(response.data.liquid);
        }
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      }
    };

    fetchData();
  }, [lastFetchTime]);  // React runs this function when 'lastFetchTime' changes


  const data = [
    {
      category: 'Water Intake',
      liquid: arduinoLiquid,
      title: 'Sip Count',
      sips: 0,
    },
  ];
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