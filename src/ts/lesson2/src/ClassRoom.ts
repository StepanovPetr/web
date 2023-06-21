import { Pupil } from './Pupil.js'

/**
 * Класс ClassRoom .
 */

export class ClassRoom {
    pupils: Pupil[] = [];

    constructor(pupil1: Pupil, pupil2: Pupil, pupil3: Pupil, pupil4: Pupil) {
        this.pupils.push(pupil1);
        this.pupils.push(pupil2);
        this.pupils.push(pupil3);
        this.pupils.push(pupil4);
    }

    /**
    * Получить средний балл про класу..
    */
    GetRoundGrade = (): number => {
        let sum: number = 0;
        this.pupils.forEach(i => sum += i.getCurrentGrade())
        return sum / this.pupils.length;
    }


    logJSONData  = async () =>  {
        var headers = {}

        const response = await fetch("http://boost.org/doc/libs/master/libs/beast/doc/html/beast/quick_start/", {
            method : "GET",
            mode: 'cors',
            headers: headers
        });
        const text = await response.text();
        console.log(text);
    }

}