import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text } from 'react-native';
import GameImage from "./GameImage";
import DisplayGameData from "./DisplayGameData";

export default function IGDB() {

    return (
        <ScrollView>
             <DisplayGameData></DisplayGameData>
            <GameImage></GameImage>
        </ScrollView>
    );
}
