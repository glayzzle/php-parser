// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/get_declared_classes_variation1.phpt
  it("Test get_declared_classes() function : testing autoloaded classes", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing get_declared_classes() : testing autoloaded classes ***\\n\";\nspl_autoload_register(function ($class_name) {\n    require_once $class_name . '.inc';\n});\necho \"\\n-- before instance is declared --\\n\";\nvar_dump(in_array('AutoLoaded', get_declared_classes()));\necho \"\\n-- after instance is declared --\\n\";\n$class = new AutoLoaded();\nvar_dump(in_array('AutoLoaded', get_declared_classes()));\necho \"\\nDONE\\n\";\n?>")).toMatchSnapshot();
  });
});
