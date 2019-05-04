'use strict';

class TestAtomCreate {
	constructor() {
		this.asserter = new Asserter();
	}

	test() {
		console.log('%c Create', 'color: orange')

		this.testCreateHydrogene1();
		this.testCreateCarbon12();

		this.testCreateTooBigAtomicNumber();
		this.testCreateNegativeMassNumber();
		this.testCreateNegativeAtomicNumber();
	}

	testCreateHydrogene1() {
		let hydrogene = new Atom(1, 1);

		this.asserter.assertSame(1, hydrogene.getMassNumber(), 'createHydrogene massNumber');
		this.asserter.assertSame(1, hydrogene.getAtomicNumber(), 'createHydrogene, atomicNumber');
	}

	testCreateCarbon12() {
		let carbon = new Atom(12, 6);

		this.asserter.assertSame(12, carbon.getMassNumber(), 'createCarbon12 massNumber');
		this.asserter.assertSame(6, carbon.getAtomicNumber(), 'createCarbon12 atomicNumber');
	}

	testCreateTooBigAtomicNumber() {
		let atom = new Atom(3, 5);

		this.asserter.assertSame(3, atom.getMassNumber(), 'createTooBigAtomicNumber massNumber');
		this.asserter.assertSame(3, atom.getAtomicNumber(), 'createTooBigAtomicNumber atomicNumber');
	}

	testCreateNegativeMassNumber() {
		let atom = new Atom(-10, 4);

		this.asserter.assertSame(1, atom.getMassNumber(), 'createNegativeMassNumber massNumber');
		this.asserter.assertSame(1, atom.getAtomicNumber(), 'createNegativeMassNumber atomicNumber');
	}

	testCreateNegativeAtomicNumber() {
		let atom = new Atom(4, -3);

		this.asserter.assertSame(4, atom.getMassNumber(), 'createNegativeAtomicNumber massNumber');
		this.asserter.assertSame(1, atom.getAtomicNumber(), 'createNegativeAtomicNumber atomicNumber');
	}
}
