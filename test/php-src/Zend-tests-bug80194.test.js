// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug80194.phpt
  it("Bug #80194: Assertion failure during block assembly of unreachable free with leading nop", function () {
    expect(parser.parseCode("<?php\nfunction test($x) {\n    switch ($x->y) {\n        default:\n            throw new Exception;\n        case 'foobar':\n            return new stdClass();\n            break;\n    }\n}\n$x = (object)['y' => 'foobar'];\nvar_dump(test($x));\n?>")).toMatchSnapshot();
  });
});
