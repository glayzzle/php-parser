// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug47109.phpt
  it("Bug #47109 (Memory leak on $a->{\"a\".\"b\"} when $a is not an object)", function () {
    expect(parser.parseCode("<?php\n$a->{\"a\".\"b\"};\n?>")).toMatchSnapshot();
  });
});
