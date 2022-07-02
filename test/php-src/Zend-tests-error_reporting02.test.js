// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/error_reporting02.phpt
  it("testing @ and error_reporting - 2", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL & ~E_DEPRECATED);\nfunction foo($arg) {\n}\nfunction bar() {\n    error_reporting(E_ALL);\n    throw new Exception(\"test\");\n}\ntry {\n    @foo(@bar());\n} catch (Exception $e) {\n}\nvar_dump(error_reporting());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
