import {Pupil} from './Pupil.js'

export class ExcelentPupil extends Pupil {
    study = () => 'ExcelentPupil study';
    read = () => 'ExcelentPupil read';
    write = () => 'ExcelentPupil write';
    relax = () => 'ExcelentPupil relax';
    getCurrentGrade = () => 5;
}