// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/error_reporting04.phpt
  it("testing @ and error_reporting - 4", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL & ~E_DEPRECATED);\nfunction foo() {\n    echo $undef;\n    error_reporting(E_ALL);\n}\nfoo(@$var);\nvar_dump(error_reporting());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
