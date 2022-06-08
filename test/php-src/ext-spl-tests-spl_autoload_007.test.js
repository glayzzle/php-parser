// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_autoload_007.phpt
  it("SPL: spl_autoload() with inaccessible methods", function () {
    expect(parser.parseCode("<?php\nclass MyAutoLoader {\n        static protected function noAccess($className) {\n            echo __METHOD__ . \"($className)\\n\";\n        }\n        static function autoLoad($className) {\n            echo __METHOD__ . \"($className)\\n\";\n        }\n        function dynaLoad($className) {\n            echo __METHOD__ . \"($className)\\n\";\n        }\n}\n$obj = new MyAutoLoader;\n$funcs = array(\n    'MyAutoLoader::notExist',\n    'MyAutoLoader::noAccess',\n    'MyAutoLoader::autoLoad',\n    'MyAutoLoader::dynaLoad',\n    array('MyAutoLoader', 'notExist'),\n    array('MyAutoLoader', 'noAccess'),\n    array('MyAutoLoader', 'autoLoad'),\n    array('MyAutoLoader', 'dynaLoad'),\n    array($obj, 'notExist'),\n    array($obj, 'noAccess'),\n    array($obj, 'autoLoad'),\n    array($obj, 'dynaLoad'),\n);\nforeach($funcs as $idx => $func)\n{\n    if ($idx) echo \"\\n\";\n    try {\n        var_dump($func);\n        spl_autoload_register($func);\n        echo \"ok\\n\";\n    } catch(\\TypeError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
