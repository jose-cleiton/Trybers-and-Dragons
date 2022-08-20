import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  name: string;
  mageEnergyType: EnergyType;

  private static _instanceCounter = 0;

  constructor(name: string) {
    super(name);
    this.name = name;

    this.mageEnergyType = 'mana';
    Mage._instanceCounter += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._instanceCounter;
  }

  get energyType(): EnergyType {
    return this.mageEnergyType;
  }
}
