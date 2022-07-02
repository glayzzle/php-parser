// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/error_reporting03.phpt
  it("testing @ and error_reporting - 3", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL & ~E_DEPRECATED);\nfunction foo($arg) {\n    echo @$nonex_foo;\n}\nfunction bar() {\n    echo @$nonex_bar;\n    throw new Exception(\"test\");\n}\nfunction foo1() {\n    echo $undef1;\n    error_reporting(E_ALL);\n    echo $undef2;\n}\ntry {\n    @foo(@bar(@foo1()));\n} catch (Exception $e) {\n}\nvar_dump(error_reporting());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
