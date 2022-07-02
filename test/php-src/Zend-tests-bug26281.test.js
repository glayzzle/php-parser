// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug26281.phpt
  it("Bug #26281 (switch() crash when condition is a string offset)", function () {
    expect(parser.parseCode("<?php\n    $x = 'abc';\n    switch ($x[0]) {\n        case 'a':\n            echo \"no crash\\n\";\n            break;\n    }\n?>")).toMatchSnapshot();
  });
});
