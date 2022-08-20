import Fighter from '../Fighter/interfaceFighter';
import Battle from './Battle';

export default class PVP extends Battle {
  player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);

    this.player2 = player2;
  }

  fight() {
    while (this.player.lifePoints > 0 && this.player2.lifePoints > 0) {
      this.player.attack(this.player2);
      this.player2.attack(this.player);
    }

    if (this.player.lifePoints < 1) {
      return -1;
    }
      
    return 1;
  }
}
