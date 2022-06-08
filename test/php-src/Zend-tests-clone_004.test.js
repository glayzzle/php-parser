// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/clone_004.phpt
  it("Testing usage of object as array on clone statement", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    public function __get($a) {\n        return new $this;\n    }\n}\n$c = new foo;\n$a = clone $c->b[1];\n?>")).toMatchSnapshot();
  });
});
