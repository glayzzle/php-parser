// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug62609.phpt
  it("Bug #62609: Allow implementing Traversable on abstract classes (fail)", function () {
    expect(parser.parseCode("<?php\nabstract class AbstractTraversable implements Traversable {}\nclass NonAbstractTraversable extends AbstractTraversable {}\n?>")).toMatchSnapshot();
  });
});
