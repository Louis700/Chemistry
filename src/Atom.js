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
}
