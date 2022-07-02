// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/interface_exists_variation4.phpt
  it("Test interface_exists() function : test autoload default value", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing interface_exists() : test autoload default value ***\\n\";\nspl_autoload_register(function ($class_name) {\n    require_once $class_name . '.inc';\n});\nvar_dump(interface_exists(\"AutoInterface\"));\necho \"\\nDONE\\n\";\n?>")).toMatchSnapshot();
  });
});
