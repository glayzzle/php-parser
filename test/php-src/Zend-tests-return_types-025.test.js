// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/025.phpt
  it("Return type of self is allowed in closure", function () {
    expect(parser.parseCode("<?php\n$c = function(): self { return $this; };\nclass Bar { }\nvar_dump($c->call(new Bar));\n?>")).toMatchSnapshot();
  });
});
