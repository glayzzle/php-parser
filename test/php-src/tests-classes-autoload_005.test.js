// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/autoload_005.phpt
  it("ZE2 Autoload from destructor", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($class_name) {\n    var_dump(class_exists($class_name, false));\n    require_once(__DIR__ . '/' . $class_name . '.inc');\n    echo 'autoload(' . $class_name . \")\\n\";\n});\nvar_dump(class_exists('autoload_derived', false));\nvar_dump(class_exists('autoload_derived', false));\nclass Test\n{\n    function __destruct() {\n        echo __METHOD__ . \"\\n\";\n        $o = new autoload_derived;\n        var_dump($o);\n    }\n}\n$o = new Test;\nunset($o);\n?>")).toMatchSnapshot();
  });
});
