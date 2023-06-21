import { Pupil } from './Pupil.js'

/**
 * Класс BadPulil.
 */

export class BadPulil extends Pupil {
    study = () => 'Bad study';
    read = () => 'Bad read';
    write = () => 'Bad write';
    relax = () => 'Bad relax';
    getCurrentGrade = () => 3;
}