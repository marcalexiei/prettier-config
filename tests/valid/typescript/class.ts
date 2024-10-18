export class Stufo {
  quanto: 'tanto' | 'tantissimo' | 'infinito';

  // I'm onanista inside
  onanista = true;

  constructor(quanto) {
    this.quanto = quanto;
  }

  isPassiveAggressive(): boolean {
    return !this.onanista;
  }
}
