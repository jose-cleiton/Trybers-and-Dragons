import Race from './Race';

class Dwarf extends Race {
  private static _instanceCounter = 0;
  private _maxLifePoints = 80;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._instanceCounter += 1;
  }
  
  static createdRacesInstances(): number {
    return Dwarf._instanceCounter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;