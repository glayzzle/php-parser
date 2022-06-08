// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug62262.phpt
  it("Bug #62262: RecursiveArrayIterator does not implement Countable", function () {
    expect(parser.parseCode("<?php\nvar_dump(new RecursiveArrayIterator(array()) instanceof Countable);\n?>")).toMatchSnapshot();
  });
});
