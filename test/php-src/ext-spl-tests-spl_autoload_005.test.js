// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_autoload_005.phpt
  it("SPL: spl_autoload() with methods", function () {
    expect(parser.parseCode("<?php\nclass MyAutoLoader {\n        function autoLoad($className)\n        {\n            echo __METHOD__ . \"($className)\\n\";\n        }\n        function autoThrow($className)\n        {\n            echo __METHOD__ . \"($className)\\n\";\n            throw new Exception(\"Unavailable\");\n        }\n}\ntry {\n    spl_autoload_register(array('MyAutoLoader', 'autoLoad'), true);\n} catch(\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n// and\n$myAutoLoader = new MyAutoLoader();\nspl_autoload_register(array($myAutoLoader, 'autoLoad'));\nspl_autoload_register(array($myAutoLoader, 'autoThrow'));\ntry\n{\n    var_dump(class_exists(\"TestClass\", true));\n}\ncatch(Exception $e)\n{\n    echo 'Exception: ' . $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
