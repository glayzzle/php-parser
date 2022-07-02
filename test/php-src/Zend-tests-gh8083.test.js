// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gh8083.phpt
  it("GH-8083 (var_dump() on closure with static variable segfaults)", function () {
    expect(parser.parseCode("<?php\nfunction func() {\n    static $i;\n}\n$x = func(...);\nvar_dump($x);\n?>")).toMatchSnapshot();
  });
});
