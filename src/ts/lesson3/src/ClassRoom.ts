import { Pupil } from './Pupil.js'

export class ClassRoom {
    pupils: Pupil[] = [];

    constructor(pupil1: Pupil, pupil2: Pupil, pupil3: Pupil, pupil4: Pupil) {
        this.pupils.push(pupil1);
        this.pupils.push(pupil2);
        this.pupils.push(pupil3);
        this.pupils.push(pupil4);
    }

    GetRoundGrade = (): number => {
        let sum: number = 0;
        this.pupils.forEach(i => sum += i.getCurrentGrade())
        return sum / this.pupils.length;
    }
}