// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/assert/assert_basic2.phpt
  it("assert() - basic - correct call back values before and after assert.", function () {
    expect(parser.parseCode("<?php\nfunction f2()\n{\n    echo \"f2 called\\n\";\n}\nfunction f1()\n{\n    echo \"f1 called\\n\";\n}\nvar_dump($o = assert_options(ASSERT_CALLBACK));\nassert(0);\nvar_dump($o= assert_options(ASSERT_CALLBACK, \"f2\"));\nvar_dump($n= assert_options(ASSERT_CALLBACK));\nassert(0);\n?>")).toMatchSnapshot();
  });
});
