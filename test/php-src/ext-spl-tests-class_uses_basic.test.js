// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/class_uses_basic.phpt
  it("SPL: Test class_implements() function : basic", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing class_uses() : basic ***\\n\";\ntrait foo { }\nclass bar { use foo; }\nvar_dump(class_uses(new bar));\nvar_dump(class_uses('bar'));\n?>")).toMatchSnapshot();
  });
});
