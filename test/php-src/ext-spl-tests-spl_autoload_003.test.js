// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_autoload_003.phpt
  it("SPL: spl_autoload() and friends", function () {
    expect(parser.parseCode("<?php\nfunction TestFunc1($classname)\n{\n    echo __METHOD__ . \"($classname)\\n\";\n}\nfunction TestFunc2($classname)\n{\n    echo __METHOD__ . \"($classname)\\n\";\n    throw new Exception(\"Class $classname missing\");\n}\nfunction TestFunc3($classname)\n{\n    echo __METHOD__ . \"($classname)\\n\";\n}\nspl_autoload_register(\"TestFunc1\");\nspl_autoload_register(\"TestFunc2\");\nspl_autoload_register(\"TestFunc3\");\ntry\n{\n    var_dump(class_exists(\"TestClass\", true));\n}\ncatch(Exception $e)\n{\n    echo 'Exception: ' . $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
