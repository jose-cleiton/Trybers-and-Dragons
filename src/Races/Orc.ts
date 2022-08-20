import Race from './Race';

class Orc extends Race {
  private static _instanceCounter = 0;
  private _maxLifePoints = 74;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._instanceCounter += 1;
  }
  
  static createdRacesInstances(): number {
    return Orc._instanceCounter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;