// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/autoload_006.phpt
  it("ZE2 Autoload from destructor", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($class_name) {\n    require_once(__DIR__ . '/' . strtolower($class_name) . '.inc');\n    echo 'autoload(' . $class_name . \")\\n\";\n});\nvar_dump(interface_exists('autoload_interface', false));\nvar_dump(class_exists('autoload_implements', false));\n$o = new Autoload_Implements;\nvar_dump($o);\nvar_dump($o instanceof autoload_interface);\nunset($o);\nvar_dump(interface_exists('autoload_interface', false));\nvar_dump(class_exists('autoload_implements', false));\n?>")).toMatchSnapshot();
  });
});
