// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/methods_002.phpt
  it("Testing collision with magic methods", function () {
    expect(parser.parseCode("<?php\ntrait foo {\n    public function __clone() {\n        var_dump(__FUNCTION__);\n    }\n}\ntrait baz {\n    public function __clone() {\n        var_dump(__FUNCTION__);\n    }\n}\nclass bar {\n    use foo;\n    use baz;\n}\n$o = new bar;\nvar_dump(clone $o);\n?>")).toMatchSnapshot();
  });
});
