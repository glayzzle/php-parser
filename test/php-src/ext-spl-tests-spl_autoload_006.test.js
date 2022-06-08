// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_autoload_006.phpt
  it("SPL: spl_autoload() with static methods", function () {
    expect(parser.parseCode("<?php\nclass MyAutoLoader {\n        static function autoLoad($className) {\n            echo __METHOD__ . \"($className)\\n\";\n        }\n}\nspl_autoload_register('MyAutoLoader::autoLoad');\nvar_dump(spl_autoload_functions());\n// check\nvar_dump(class_exists(\"TestClass\", true));\n?>")).toMatchSnapshot();
  });
});
