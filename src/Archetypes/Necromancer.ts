import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  name: string;
  necromancerEnergyType: EnergyType;

  private static _instanceCounter = 0;

  constructor(name: string) {
    super(name);
    this.name = name;

    this.necromancerEnergyType = 'mana';
    Necromancer._instanceCounter += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._instanceCounter;
  }

  get energyType(): EnergyType {
    return this.necromancerEnergyType;
  }
}
