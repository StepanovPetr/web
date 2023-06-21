import {Pupil} from './Pupil.js'

export class BadPulil extends Pupil {
    study = () => 'Bad study';
    read = () => 'Bad read';
    write = () => 'Bad write';
    relax = () => 'Bad relax';
    getCurrentGrade = () => 3;
}