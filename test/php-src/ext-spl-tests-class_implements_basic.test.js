// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/class_implements_basic.phpt
  it("SPL: Test class_implements() function : basic", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing class_implements() : basic ***\\n\";\ninterface foo { }\nclass bar implements foo {}\nvar_dump(class_implements(new bar));\nvar_dump(class_implements('bar'));\n?>")).toMatchSnapshot();
  });
});
