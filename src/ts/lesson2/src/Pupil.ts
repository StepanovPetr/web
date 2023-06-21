/**
 * Базовый класс для наследования.
 */

export class Pupil {
    study = () => 'study';
    read = () => 'read';
    write = () => 'write';
    relax = () => 'relax';

    /**
    * Поучить оценку.
    */
    getCurrentGrade = () => 0;
}