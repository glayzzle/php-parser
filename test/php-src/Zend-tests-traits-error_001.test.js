// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/error_001.phpt
  it("Trying to use instanceof for a method twice", function () {
    expect(parser.parseCode("<?php\ntrait foo {\n    public function foo() {\n        return 1;\n    }\n}\ntrait foo2 {\n    public function foo() {\n        return 2;\n    }\n}\nclass A extends foo {\n    use foo {\n        foo2::foo insteadof foo;\n        foo2::foo insteadof foo;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
