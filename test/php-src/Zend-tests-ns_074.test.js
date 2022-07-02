// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_074.phpt
  it("Testing type-hinted lambda parameter inside namespace", function () {
    expect(parser.parseCode("<?php\nnamespace foo;\n$x = function (\\stdclass $x = NULL) {\n    var_dump($x);\n};\nclass stdclass extends \\stdclass { }\n$x(NULL);\n$x(new stdclass);\n$x(new \\stdclass);\n?>")).toMatchSnapshot();
  });
});
