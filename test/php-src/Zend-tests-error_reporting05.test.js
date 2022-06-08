// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/error_reporting05.phpt
  it("testing @ and error_reporting - 5", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nclass test {\n    function __get($name) {\n        return $undef_name;\n    }\n    function __set($name, $value) {\n        return $undef_value;\n    }\n}\n$test = new test;\n$test->abc = 123;\necho $test->bcd;\n@$test->qwe = 123;\necho @$test->wer;\nvar_dump(error_reporting());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
