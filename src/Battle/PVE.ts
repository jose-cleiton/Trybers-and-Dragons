import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  monsters: Monster[] | SimpleFighter[];
  
  constructor(player: Fighter, monsters: Monster[] | SimpleFighter[]) {
    super(player);
    this.monsters = monsters;
  }

  fight() {
    this.monsters.forEach((monster) => {
      while (this.player.lifePoints > 0 && monster.lifePoints > 0) {
        this.player.attack(monster);
        monster.attack(this.player);
      }
    });

    if (this.player.lifePoints < 1) {
      return -1;
    }

    return 1;
  }
}
