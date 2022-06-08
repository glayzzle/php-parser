// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_067.phpt
  it("067: Name ambiguity (import name & internal class name)", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ . '/ns_022.inc';\ninclude __DIR__ . '/ns_027.inc';\ninclude __DIR__ . '/ns_067.inc';\n?>")).toMatchSnapshot();
  });
});
