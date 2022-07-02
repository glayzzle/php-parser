// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/autoload_003.phpt
  it("ZE2 Autoload and derived classes", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($class_name) {\n    require_once(__DIR__ . '/' . $class_name . '.inc');\n    echo 'autoload(' . $class_name . \")\\n\";\n});\nvar_dump(class_exists('autoload_derived'));\n?>")).toMatchSnapshot();
  });
});
