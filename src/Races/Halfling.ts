import Race from './Race';

class Halfling extends Race {
  private static _instanceCounter = 0;
  private _maxLifePoints = 60;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._instanceCounter += 1;
  }
  
  static createdRacesInstances(): number {
    return Halfling._instanceCounter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;