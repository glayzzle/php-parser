// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_071.phpt
  it("Testing parameter type-hinted (array) with default value inside namespace", function () {
    expect(parser.parseCode("<?php\nnamespace foo;\nclass bar {\n    public function __construct(array $x = NULL) {\n        var_dump($x);\n    }\n}\nnew bar(null);\nnew bar(new \\stdclass);\n?>")).toMatchSnapshot();
  });
});
