// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug30234.phpt
  it("Bug #30234 (__autoload() not invoked for interfaces)", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($class_name) {\n    require_once(__DIR__ . '/' . strtolower($class_name) . '.inc');\n    echo __FUNCTION__ . '(' . $class_name . \")\\n\";\n});\nvar_dump(interface_exists('autoload_interface', false));\nvar_dump(class_exists('autoload_implements', false));\n$o = unserialize('O:19:\"Autoload_Implements\":0:{}');\nvar_dump($o);\nvar_dump($o instanceof autoload_interface);\nunset($o);\nvar_dump(interface_exists('autoload_interface', false));\nvar_dump(class_exists('autoload_implements', false));\n?>")).toMatchSnapshot();
  });
});
