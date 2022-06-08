// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/class_exists_basic_001.phpt
  it("Test class_exists() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing class_exists() : basic functionality ***\\n\";\nspl_autoload_register(function ($className) {\n    echo \"In autoload($className)\\n\";\n});\necho \"Calling class_exists() on non-existent class with autoload explicitly enabled:\\n\";\nvar_dump( class_exists('C', true) );\necho \"\\nCalling class_exists() on existing class with autoload explicitly enabled:\\n\";\nvar_dump( class_exists('stdclass', true) );\necho \"\\nCalling class_exists() on non-existent class with autoload explicitly enabled:\\n\";\nvar_dump( class_exists('D', false) );\necho \"\\nCalling class_exists() on existing class with autoload explicitly disabled:\\n\";\nvar_dump( class_exists('stdclass', false) );\necho \"\\nCalling class_exists() on non-existent class with autoload unspecified:\\n\";\nvar_dump( class_exists('E') );\necho \"\\nCalling class_exists() on existing class with autoload unspecified:\\n\";\nvar_dump( class_exists('stdclass') );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
