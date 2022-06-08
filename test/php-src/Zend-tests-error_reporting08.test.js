// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/error_reporting08.phpt
  it("testing @ and error_reporting - 8", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL & ~E_DEPRECATED);\nfunction foo1($arg) {\n}\nfunction foo2($arg) {\n}\nfunction foo3() {\n    error_reporting(E_ALL);\n    echo $undef3;\n    throw new Exception(\"test\");\n}\ntry {\n    @foo1(@foo2(@foo3()));\n} catch (Exception $e) {\n}\nvar_dump(error_reporting());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
