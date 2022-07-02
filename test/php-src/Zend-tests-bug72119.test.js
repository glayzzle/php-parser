// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug72119.phpt
  it("Bug #72119 (Interface declaration compatibility regression with default values)", function () {
    expect(parser.parseCode("<?php\ninterface Foo {\n    public function bar(array $baz = null);\n}\nclass Hello implements Foo {\n    public function bar(array $baz = [])\n    {\n    }\n}\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
