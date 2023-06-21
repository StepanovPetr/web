import {Habitat} from './Enums/Habitat.js'
import {View} from './Enums/View.js'

export class Animal {
    private _name: string;
    private _age : number;
    private _numberOfIimbs : number;
    private _habitat : Habitat;
    private _view : View;

    public constructor(name: string, age : number, numberOfIimbs : number, habitat : Habitat, view : View) {
        this._name = name;
        this._age = age;
        this._numberOfIimbs = numberOfIimbs;
        this._habitat = habitat;
        this._view = view;
    }
}