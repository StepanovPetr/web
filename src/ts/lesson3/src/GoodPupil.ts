import {Pupil} from './Pupil.js'

export class GoodPupil extends Pupil {
    study = () => 'GoodPupil study';
    read = () => 'GoodPupil read';
    write = () => 'GoodPupil write';
    relax = () => 'GoodPupil relax';
    getCurrentGrade = () => 4;
}