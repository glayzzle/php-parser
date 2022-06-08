// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/022.phpt
  it("Implementing abstracting methods and optional parameters", function () {
    expect(parser.parseCode("<?php\nabstract class Base\n{\n    abstract function someMethod($param);\n}\nclass Ext extends Base\n{\n    function someMethod($param = \"default\")\n    {\n        echo $param, \"\\n\";\n    }\n}\n$a = new Ext();\n$a->someMethod(\"foo\");\n$a->someMethod();\n?>")).toMatchSnapshot();
  });
});
