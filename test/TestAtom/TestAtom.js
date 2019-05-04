'use strict';

class TestAtom {
	constructor() {
		this.asserter = new Asserter();
	}

	test() {
		console.log('%cTestAtom', 'color: lightgreen');
		
		new TestAtomCreate().test();
		new TestAtomGetMass().test();
	}
}
