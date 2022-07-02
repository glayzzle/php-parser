// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug37144.phpt
  it("Bug #37144 (PHP crashes trying to assign into property of dead object)", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n  $x = new stdClass();\n  $x->bar = array(1);\n  return $x;\n}\nfoo()->bar[1] = \"123\";\nfoo()->bar[0]++;\nunset(foo()->bar[0]);\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
