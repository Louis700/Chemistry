'use strict';

class TestAtomGetMass {
	constructor() {
		this.asserter = new Asserter();
	}

	test() {
		console.log('%c GetMass', 'color: orange')

		this.testGetMassOfHydrogene1();
		this.testGetMassOfCarbon12();
		this.testGetMassOfUranium238();
	}

	testGetMassOfHydrogene1() {
		let hydrogene = new Atom(1, 1);
		let mass = (Atom.ELECTRON_MASS() + Atom.PROTON_MASS());

		this.asserter.assertSame(mass, hydrogene.getMass(), 'hydrogene1');
	}

	testGetMassOfCarbon12() {
		let carbon = new Atom(12, 6);
		let mass = 6*(Atom.ELECTRON_MASS() + Atom.PROTON_MASS() + Atom.NEUTRON_MASS());

		this.asserter.assertSame(mass, carbon.getMass(), 'carbon12');
	}

	testGetMassOfUranium238() {
		let uranium = new Atom(238, 92);
		let mass = 92*(Atom.ELECTRON_MASS() + Atom.PROTON_MASS()) + 146*Atom.NEUTRON_MASS();

		this.asserter.assertSame(mass , uranium.getMass(), 'uranium238');
	}
}
