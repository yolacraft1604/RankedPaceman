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
}

export const SmSplit: React.FC<Props> = ({IngameName, split, Country, time, Matchtime, url}) => {

    return (
        <div className="flex flex-col justify-between w-full gap-2 p-1 px-2 pr-3">
            <div className="flex w-full justify-between">
                <div className="flex items-center gap-2">
                    <img src={`https://minotar.net/helm/${IngameName}/128.png`}
                         alt={"RAHMEN"}
                         className="w-8 h-8"
                    />
                    <Text size={"6"}>
                        {IngameName}
                    </Text>
                    {Country != undefined && (
                        <img src={`https://countryflagsapi.netlify.app/flag/${Country}.svg`} className="h-6"/>)}
                </div>
                <img src={splitToIndex(split) + ".png"} className="w-8 h-8"/>
            </div>
            <div className="w-full flex justify-between">
                <a href={url}><div className="flex items-center gap-2 bg-purple-600 p-1 px-4 rounded-sm hover:bg-purple-400 transition-all"><FaTwitch /> Live</div></a>
                <Text size={"6"} className="">{msToFormat(time)}</Text>
            </div>
        </div>
    )
}