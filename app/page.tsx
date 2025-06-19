'use client';

import { useEffect, useState } from 'react';
import { Link, DropdownMenu, Button, Text, Heading, Flex, ScrollArea, SegmentedControl } from "@radix-ui/themes";
import React from 'react';
import {Split} from "@/components/Element";
import {SmSplit} from "@/components/smElement";

type Player = {
  name: string;
  elo: number;
  country: string;
  Rank: number;
};

type Element = {
  player: Player;
  split: string;
  time: number;
  url: string;
  realtime: number;
};

export default function TestPage() {
  const [data, setData] = useState<Element[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const res = await fetch('/api/live');
        if (!res.ok) throw new Error('Failed to fetch data');
        const json: Element[] = await res.json();
        if (isMounted) {
          setData(json);
          setLoading(false);
          setError(null);
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      }
    }

    fetchData();
    const interval = setInterval(fetchData, 2000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;

  return (
      <div className="p-6 flex flex-col items-center gap-8">
        <div className="flex items-center w-full justify-center">
          <span
              className="hidden xl:block text-8xl font-bold grad text-transparent bg-clip-text bg-gradient-to-r from-[#86ce34] to-[#102c30]">MCSR RANKED PACEMAN</span>
          <span
              className="hidden md:block xl:hidden text-6xl font-bold grad text-transparent bg-clip-text bg-gradient-to-r from-[#86ce34] to-[#102c30]">MCSR RANKED PACEMAN</span>
          <span
              className="md:hidden text-3xl font-bold grad text-transparent bg-clip-text bg-gradient-to-r from-[#86ce34] to-[#102c30]">MCSR RANKED PACEMAN</span>


        </div>
        <ScrollArea className="bg-neutral-200 dark:bg-neutral-800 max-w-[80rem] rounded-md" type="always"
                    scrollbars="vertical" style={{height: 600}}>
        <div className="hidden md:block">
            {data.map((entry, index) => (
                <React.Fragment key={entry.player.name}>
                  <Split
                      split={entry.split}
                      IngameName={entry.player.name}
                      Country={entry.player.country}
                      time={entry.time}
                      url={entry.url}
                      Matchtime={entry.realtime}
                  />
                  {index < data.length - 1 && (
                      <div className="w-full bg-neutral-400 h-[1px]"></div>
                  )}
                </React.Fragment>
            ))}
          </div>
          <div className="md:hidden">
            {data.map((entry, index) => (
                <React.Fragment key={entry.player.name}>
                  <SmSplit
                      split={entry.split}
                      IngameName={entry.player.name}
                      Country={entry.player.country}
                      time={entry.time}
                      url={entry.url}
                      Matchtime={entry.realtime}
                  />
                  {index < data.length - 1 && (
                      <div className="w-full bg-neutral-400 h-[1px]"></div>
                  )}
                </React.Fragment>
            ))}
          </div>
        </ScrollArea>
        <div className="flex gap-2">
          <Link color={"gray"} href={"/impressum"}>Impressum</Link>
          <Link color={"gray"}>|</Link>
          <Link color={"gray"} href={"/privacy"}>Datenschutz</Link>
          <Link color={"gray"}>|</Link>
          <Link color={"gray"} href={"https://mcsrranked.com/"}>MCSR Ranked</Link>
        </div>
      </div>
  );
}
