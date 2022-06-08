// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/get_declared_interfaces_variation1.phpt
  it("Test get_declared_interfaces() function : autoloading of interfaces", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing get_declared_interfaces() : autoloading of interfaces ***\\n\";\nspl_autoload_register(function ($class_name) {\n    require_once $class_name . '.inc';\n});\necho \"\\n-- before interface is used --\\n\";\nvar_dump(in_array('AutoInterface', get_declared_interfaces()));\necho \"\\n-- after interface is used --\\n\";\nclass Implementor implements AutoInterface {}\nvar_dump(in_array('AutoInterface', get_declared_interfaces()));\necho \"\\nDONE\\n\";\n?>")).toMatchSnapshot();
  });
});
