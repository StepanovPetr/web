import {Pupil} from './Pupil.js'
import {BadPulil} from './BadPupil.js'
import {ExcelentPupil} from './ExcelentPupil.js'
import {GoodPupil} from './GoodPupil.js'
import {ClassRoom} from './ClassRoom.js'

const main = () => {

    let pupil1 : Pupil = new BadPulil();
    let pupil2 : Pupil = new BadPulil();
    let pupil3 : Pupil = new GoodPupil();
    let pupil4 : Pupil = new ExcelentPupil();

    let classRoom : ClassRoom = new ClassRoom(pupil1, pupil2, pupil3, pupil4);
    console.log(classRoom.GetRoundGrade());
    classRoom.logJSONData();
}

main();