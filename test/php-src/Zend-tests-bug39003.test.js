// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug39003.phpt
  it("Bug #39003 (autoloader is called for type hinting)", function () {
    expect(parser.parseCode("<?php\nclass ClassName\n{\n    public $var = 'bla';\n}\nfunction test (OtherClassName $object) { }\nspl_autoload_register(function ($class) {\n    var_dump(\"__autload($class)\");\n});\n$obj = new ClassName;\ntest($obj);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
