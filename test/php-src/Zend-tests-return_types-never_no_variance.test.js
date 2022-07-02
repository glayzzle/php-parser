// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/never_no_variance.phpt
  it("never return type: prevent unacceptable cases", function () {
    expect(parser.parseCode("<?php\nclass A\n{\n    public function bar(): never\n    {\n        throw new \\Exception('parent');\n    }\n}\nclass B extends A\n{\n    public function bar(): string\n    {\n        return \"hello\";\n    }\n}\n(new B)->bar();\n?>")).toMatchSnapshot();
  });
});
