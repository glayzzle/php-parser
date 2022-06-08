// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug77494.phpt
  it("Bug #77494 (Disabling class causes segfault on member access)", function () {
    expect(parser.parseCode("<?php\n$a = new CURLFile();\nvar_dump($a->name);\n$b = new ErrorException();\nvar_dump($b->message);\n?>")).toMatchSnapshot();
  });
});
