// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/interface_exists_variation3.phpt
  it("Test interface_exists() function : autoloaded interface", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing interface_exists() : autoloaded interface ***\\n\";\nspl_autoload_register(function ($class_name) {\n    require_once $class_name . '.inc';\n});\necho \"\\n-- no autoloading --\\n\";\nvar_dump(interface_exists(\"AutoInterface\", false));\necho \"\\n-- with autoloading --\\n\";\nvar_dump(interface_exists(\"AutoInterface\", true));\necho \"\\nDONE\\n\";\n?>")).toMatchSnapshot();
  });
});
