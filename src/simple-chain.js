const chainMaker = {
  chain: [],

  getLength() {
    this.chain.length;
    return this;
  },
  addLink(value) {
    if (value === undefined) {
      this.chain.push("( )");
    } else {
      this.chain.push("( " + value + " )");
    }
    return this;
  },
  removeLink(position) {
    if (
      Number.isNaN(position) ||
      position <= 0 ||
      position > this.chain.length ||
      parseInt(position) !== position
    ) {
      this.chain = [];
      throw Error;
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let c = this.chain;
    this.chain = [];
    return c.join("~~");
  }
};

module.exports = chainMaker;
