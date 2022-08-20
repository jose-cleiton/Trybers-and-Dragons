import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  name: string;
  rangerEnergyType: EnergyType;

  private static _instanceCounter = 0;

  constructor(name: string) {
    super(name);
    this.name = name;

    this.rangerEnergyType = 'stamina';
    Ranger._instanceCounter += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._instanceCounter;
  }

  get energyType(): EnergyType {
    return this.rangerEnergyType;
  }
}
