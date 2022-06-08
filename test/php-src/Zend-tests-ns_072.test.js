// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_072.phpt
  it("Testing parameter type-hinted with interface", function () {
    expect(parser.parseCode("<?php\nnamespace foo;\ninterface foo {\n}\nclass bar {\n    public function __construct(foo $x = NULL) {\n        var_dump($x);\n    }\n}\nclass test implements foo {\n}\nnew bar(new test);\nnew bar(null);\nnew bar(new \\stdclass);\n?>")).toMatchSnapshot();
  });
});
