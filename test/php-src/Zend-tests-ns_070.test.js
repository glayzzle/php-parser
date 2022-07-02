// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_070.phpt
  it("Testing parameter type-hinted with default value inside namespace", function () {
    expect(parser.parseCode("<?php\nnamespace foo;\nclass bar {\n    public function __construct(\\stdclass $x = NULL) {\n        var_dump($x);\n    }\n}\nnew bar(new \\stdclass);\nnew bar(null);\n?>")).toMatchSnapshot();
  });
});
