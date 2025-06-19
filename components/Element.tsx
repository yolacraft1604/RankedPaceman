"use client"

import {useState} from "react";
import React from "react";
import {msToFormat, splitToIndex} from "@/utils/msToFormat";
import {Button, Flex, Grid, Text} from "@radix-ui/themes";
import {FaTwitch} from "react-icons/fa";

interface Props {
    IngameName: string;
    Country: string;
    split: string;
    time: number;
    Matchtime: number;
    url: string;
    rank: number;
}

export const Split: React.FC<Props> = ({IngameName, split, Country, time, Matchtime, url, rank}) => {

    return (
            <div className="flex justify-between w-full p-1 px-6">
                <div className="flex gap-2 items-center w-56">
                    <img src={`https://minotar.net/helm/${IngameName}/128.png`}
                         alt={"RAHMEN"}
                         className="w-8 h-8"
                    />
                    <Text size={"6"}>
                        {IngameName}
                    </Text>
                    {Country != undefined && (<img src={`https://countryflagsapi.netlify.app/flag/${Country}.svg`} className="h-6 hidden xl:block"/>)}
                    <Text size={"6"} className=" hidden xl:block">#{rank}</Text>
                </div>
                <div className="flex gap-2 w-[22rem]">
                    <img src={splitToIndex(split) + ".png"} className="w-8 h-8"/>
                    <div className="flex gap-8 justify-end w-full">
                        {splitToIndex(split) == 1 && <Text size={"6"}>Enter Nether</Text>}
                        {splitToIndex(split) == 2 && <Text size={"6"}>Enter Bastion</Text>}
                        {splitToIndex(split) == 3 && <Text size={"6"}>Found Fortress</Text>}
                        {splitToIndex(split) == 4 && <Text size={"6"}>Finding Stronghold</Text>}
                        {splitToIndex(split) == 5 && <Text size={"6"}>Found Stronghold</Text>}
                        {splitToIndex(split) == 6 && <Text size={"6"}>Enter End</Text>}
                        <Text size={"6"} className="">{msToFormat(time)}</Text>
                    </div>
                </div>
                <Flex gap={"4"}>
                    <a href={url}><div className="flex items-center gap-2 bg-purple-600 p-1 px-4 rounded-sm hover:bg-purple-400 transition-all"><FaTwitch /> Live</div></a>
                </Flex>
            </div>
    )
}
