'use strict';

class Atom {
	constructor(massNumber, atomicNumber) {
		if(massNumber <= 0)
			massNumber = 1;
		if(atomicNumber <= 0)
			atomicNumber = 1;

		this.massNumber = massNumber;
		this.atomicNumber = (massNumber >= atomicNumber)? atomicNumber: massNumber;
	}

	getMassNumber() {
		return this.massNumber;
	}

	getAtomicNumber() {
		return this.atomicNumber;
	}

	getMass() {
		let protonsMass = this.atomicNumber*Atom.PROTON_MASS();
		let electronsMass = this.atomicNumber*Atom.ELECTRON_MASS();
		let neutronsMass = (this.massNumber - this.atomicNumber)*Atom.NEUTRON_MASS();

		return protonsMass + electronsMass + neutronsMass;
	}

	static ELECTRON_MASS() {
		return 9.10938356e-31
	}

	static PROTON_MASS() {
		return 1.672649e-27;
	}

	static NEUTRON_MASS() {
		return 1.674927471e-27;
	}
}
