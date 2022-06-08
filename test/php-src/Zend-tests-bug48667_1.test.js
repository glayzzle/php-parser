// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug48667_1.phpt
  it("Bug #48667 (Implementing both iterator and iteratoraggregate)", function () {
    expect(parser.parseCode("<?php\nabstract class A implements Iterator, IteratorAggregate { }\n?>")).toMatchSnapshot();
  });
});
