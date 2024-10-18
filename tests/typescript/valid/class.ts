export class Things {
  quanto: 'tanto' | 'tantissimo' | 'infinito';

  // I'm onanista inside
  onanista = true;

  constructor(quanto) {
    this.quanto = quanto;
  }

  isFun(): boolean {
    return !this.onanista;
  }
}
