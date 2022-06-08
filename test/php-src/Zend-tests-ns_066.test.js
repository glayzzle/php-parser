// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_066.phpt
  it("066: Name ambiguity (import name & internal class name)", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ . '/ns_027.inc';\nuse Foo\\Bar\\Foo as stdClass;\nnew stdClass();\n?>")).toMatchSnapshot();
  });
});
