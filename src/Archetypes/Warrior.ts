import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  name: string;
  warriorEnergyType: EnergyType;

  private static _instanceCounter = 0;

  constructor(name: string) {
    super(name);
    this.name = name;

    this.warriorEnergyType = 'stamina';
    Warrior._instanceCounter += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._instanceCounter;
  }

  get energyType(): EnergyType {
    return this.warriorEnergyType;
  }
}
