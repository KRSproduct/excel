export class Page {
	constructor(params) {
		this.params = params;
	}

	getRoot() {
		throw new Error('methond "getRoot" should be implemented');
	}

	afterRender() {}

	destroy() {}
}
