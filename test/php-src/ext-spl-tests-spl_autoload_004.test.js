// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_autoload_004.phpt
  it("SPL: spl_autoload() with static methods", function () {
    expect(parser.parseCode("<?php\nclass MyAutoLoader {\n        static function autoLoad($className) {\n            echo __METHOD__ . \"($className)\\n\";\n        }\n}\nspl_autoload_register(array('MyAutoLoader', 'autoLoad'));\n// and\n$myAutoLoader = new MyAutoLoader();\nspl_autoload_register(array($myAutoLoader, 'autoLoad'));\nvar_dump(spl_autoload_functions());\n// check\nvar_dump(class_exists(\"TestClass\", true));\n?>")).toMatchSnapshot();
  });
});
