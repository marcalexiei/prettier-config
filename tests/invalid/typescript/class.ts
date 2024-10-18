export class Stufo {
  // ----> error is here: tantissimo is wrapped by "" instead of '' <---- //
  quanto: 'tanto' | "tantissimo" | 'infinito';

  // I'm onanista inside
  onanista = true;

  constructor(quanto) {
    this.quanto = quanto;
  }

  isPassiveAggressive(): boolean {
    return !this.onanista;
  }
}
