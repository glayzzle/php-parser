// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplDoublyLinkedList_key.phpt
  it("SplDoublyLinkedList::key basic functionality", function () {
    expect(parser.parseCode("<?php var_dump((new SplDoublyLinkedList)->key()); ?>")).toMatchSnapshot();
  });
});
