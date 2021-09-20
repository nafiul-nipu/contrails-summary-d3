import { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import contrails1 from '../data/contrails1.csv';
import contrails2 from '../data/contrails2.csv';
import contrails3 from '../data/contrails3.csv';

// const contrails1 = "https://gist.githubusercontent.com/nafiul-nipu/a9774b8edfd593ac64677cc6f7614ad4/raw/contrails1.csv"

export const useData = () => {
    const [con1Data, setContrails1] = useState(null);
    const [con2Data, setContrails2] = useState(null);
    const [con3Data, setContrails3] = useState(null);

    const row = d => {
        d.Timesteps = +d.Timesteps
        d.TotalParticles = +d.TotalParticles
        d.Ice = +d.Ice
        d.NewIce = +d.NewIce
        d.Temp = +d.Temp
        d.IceVolume = +d.IceVolume
        return d
    }

    useEffect(()=>{
        csv(contrails1, row).then(setContrails1);
        csv(contrails2, row).then(setContrails2);
        csv(contrails3, row).then(setContrails3);
    },[]);

    return {con1Data, con2Data, con3Data};
}