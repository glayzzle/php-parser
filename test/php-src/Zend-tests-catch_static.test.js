// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/catch_static.phpt
  it("Cannot catch \"static\"", function () {
    expect(parser.parseCode("<?php\n// This could in principle be supported, but isn't right now.\nclass Test {\n    public function method() {\n        try {\n            foo();\n        } catch (static $e) {}\n    }\n}\n?>")).toMatchSnapshot();
  });
});
