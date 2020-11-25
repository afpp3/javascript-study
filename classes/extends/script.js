class Veiculo {
  constructor(rodas) {
    this.rodas = rodas;
  }

  acelerar() {
    console.log(`O veiculo acelerou`);
  }
}

class Moto extends Veiculo {
  constructor(rodas, capacete) {
    super(rodas);
    this.capacete = capacete;
  }

  acelerar() {
    super.acelerar();
    console.log(`A moto acelerou`);
  }

  empinar() {
    console.log("A moto empinou com " + this.rodas + " rodas");
  }
}

const hb20 = new Veiculo(4);
const honda = new Moto(2, true);

hb20.acelerar();
honda.empinar();
honda.acelerar();
