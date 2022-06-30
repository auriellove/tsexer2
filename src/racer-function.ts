import { Racer } from './racer';

//   findempty fuel

export function findRacersWithEmptyFuel(racers: Racer[]) {
    return racers.filter(racer => racer.isFuelEmpty() === true)
}

// findaverage speed of car

export function findAverageSpeed(racers: Racer[]): number {
    if (racers.length === 0) {
        return 0;
    }
    let sumOfSpeed: number = 0;
    for (let racer of racers) {
        sumOfSpeed += racer.speed;
    }
    return  sumOfSpeed / racers.length;
}



//fastestspeed
export function findFastestRacer(racerA: Racer, racerB: Racer) {
    if (racerA.speed < racerB.speed) {
        return racerB;
    } else if (racerA.speed > racerB.speed){
        return racerA;
    } else {
        return null;
    }
}

