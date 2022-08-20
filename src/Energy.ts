export type EnergyType = 'mana' | 'stamina';

export default interface Energy {
  type_: 'mana' | 'stamina';
  amount: number;
}