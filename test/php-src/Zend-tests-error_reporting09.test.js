// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/error_reporting09.phpt
  it("testing @ and error_reporting - 9", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL & ~E_DEPRECATED);\nfunction bar() {\n    echo @$blah;\n    echo $undef2;\n}\nfunction foo() {\n    echo @$undef;\n    error_reporting(E_ALL);\n    echo $blah;\n    return bar();\n}\n@foo();\nvar_dump(error_reporting());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
