// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/named_params/unpack_and_named_2.phpt
  it("Named args before unpacking (not supported)", function () {
    expect(parser.parseCode("<?php\ntest(a: 42, ...[]);\n?>")).toMatchSnapshot();
  });
});
