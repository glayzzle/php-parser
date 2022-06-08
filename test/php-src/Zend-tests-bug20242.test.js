// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug20242.phpt
  it("Bug #20242 (Method call in front of class definition)", function () {
    expect(parser.parseCode("<?php\ntest::show_static();\n$t = new test;\n$t->show_method();\nclass test {\n    static function show_static() {\n        echo \"static\\n\";\n    }\n    function show_method() {\n        echo \"method\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
