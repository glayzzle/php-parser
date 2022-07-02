// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug47593.phpt
  it("Bug #47593 (interface_exists() returns false when using absolute namespace path)", function () {
    expect(parser.parseCode("<?php\nnamespace test;\nconst TEST = 11;\nclass foo {\n    public function xyz() {\n    }\n}\ninterface baz {\n}\nfunction bar() {\n}\nvar_dump(interface_exists('\\test\\baz'));\nvar_dump(function_exists('\\test\\bar'));\nvar_dump(constant('\\test\\TEST'));\nvar_dump(defined('\\test\\TEST'));\nvar_dump(defined('TEST'));\n?>")).toMatchSnapshot();
  });
});
