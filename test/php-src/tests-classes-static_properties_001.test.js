// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/static_properties_001.phpt
  it("ZE2 Initializing static properties to arrays", function () {
    expect(parser.parseCode("<?php\nclass test {\n    static public $ar = array();\n}\nvar_dump(test::$ar);\ntest::$ar[] = 1;\nvar_dump(test::$ar);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
