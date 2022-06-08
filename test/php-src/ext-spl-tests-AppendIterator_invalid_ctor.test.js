// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/AppendIterator_invalid_ctor.phpt
  it("AppendIterator::__construct() with invalid arguments", function () {
    expect(parser.parseCode("<?php\nnew AppendIterator(null);\n?>")).toMatchSnapshot();
  });
});
