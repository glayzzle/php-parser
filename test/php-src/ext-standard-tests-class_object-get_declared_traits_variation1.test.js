// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/get_declared_traits_variation1.phpt
  it("Test get_declared_traits() function : testing autoloaded traits", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing get_declared_traits() : testing autoloaded traits ***\\n\";\nspl_autoload_register(function ($trait_name) {\n    require_once $trait_name . '.inc';\n});\necho \"\\n-- before instance is declared --\\n\";\nvar_dump(in_array('AutoTrait', get_declared_traits()));\necho \"\\n-- after use is declared --\\n\";\nclass MyClass {\n    use AutoTrait;\n}\nvar_dump(in_array('AutoTrait', get_declared_traits()));\necho \"\\nDONE\\n\";\n?>")).toMatchSnapshot();
  });
});
