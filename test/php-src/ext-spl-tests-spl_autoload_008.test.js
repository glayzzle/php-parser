// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_autoload_008.phpt
  it("SPL: spl_autoload() with exceptions", function () {
    expect(parser.parseCode("<?php\nfunction MyAutoLoad($className)\n{\n    echo __METHOD__ . \"($className)\\n\";\n    throw new Exception('Bla');\n}\nclass MyAutoLoader\n{\n    static function autoLoad($className)\n    {\n        echo __METHOD__ . \"($className)\\n\";\n        throw new Exception('Bla');\n    }\n    function dynaLoad($className)\n    {\n        echo __METHOD__ . \"($className)\\n\";\n        throw new Exception('Bla');\n    }\n}\n$obj = new MyAutoLoader;\n$funcs = array(\n    'MyAutoLoad',\n    'MyAutoLoader::autoLoad',\n    'MyAutoLoader::dynaLoad',\n    array('MyAutoLoader', 'autoLoad'),\n    array('MyAutoLoader', 'dynaLoad'),\n    array($obj, 'autoLoad'),\n    array($obj, 'dynaLoad'),\n);\nforeach($funcs as $idx => $func)\n{\n    echo \"====$idx====\\n\";\n    var_dump($func);\n    try {\n        spl_autoload_register($func);\n    } catch (TypeError $e) {\n        echo get_class($e) . ': ' . $e->getMessage() . \\PHP_EOL;\n        var_dump(count(spl_autoload_functions()));\n        continue;\n    }\n    if (count(spl_autoload_functions())) {\n        echo \"registered\\n\";\n        try {\n            var_dump(class_exists(\"NoExistingTestClass\", true));\n        } catch (Exception $e) {\n            echo get_class($e) . ': ' . $e->getMessage() . \\PHP_EOL;\n        }\n    }\n    spl_autoload_unregister($func);\n    var_dump(count(spl_autoload_functions()));\n}\n?>")).toMatchSnapshot();
  });
});
