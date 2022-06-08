// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/autoload_002.phpt
  it("ZE2 Autoload and get_class_methods", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($class_name) {\n    require_once(__DIR__ . '/' . $class_name . '.inc');\n    echo 'autoload(' . $class_name . \")\\n\";\n});\nvar_dump(get_class_methods('autoload_root'));\n?>")).toMatchSnapshot();
  });
});
