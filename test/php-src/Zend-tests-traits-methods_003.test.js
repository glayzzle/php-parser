// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/methods_003.phpt
  it("Testing __construct and __destruct with Trait", function () {
    expect(parser.parseCode("<?php\ntrait foo {\n    public function __construct() {\n        var_dump(__FUNCTION__);\n    }\n    public function __destruct() {\n        var_dump(__FUNCTION__);\n    }\n}\nclass bar {\n    use foo;\n}\nnew bar;\n?>")).toMatchSnapshot();
  });
});
