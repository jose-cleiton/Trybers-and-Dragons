import Race from './Race';

class Elf extends Race {
  private static _instanceCounter = 0;
  private _maxLifePoints = 99;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._instanceCounter += 1;
  }
  
  static createdRacesInstances(): number {
    return Elf._instanceCounter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;