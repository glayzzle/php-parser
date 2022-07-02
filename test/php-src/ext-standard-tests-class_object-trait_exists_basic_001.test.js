// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/trait_exists_basic_001.phpt
  it("Test trait_exists() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing trait_exists() : basic functionality ***\\n\";\nspl_autoload_register(function ($traitName) {\n    echo \"In autoload($traitName)\\n\";\n});\ntrait MyTrait {}\necho \"Calling trait_exists() on non-existent trait with autoload explicitly enabled:\\n\";\nvar_dump( trait_exists('C', true) );\necho \"\\nCalling trait_exists() on existing trait with autoload explicitly enabled:\\n\";\nvar_dump( trait_exists('MyTrait', true) );\necho \"\\nCalling trait_exists() on non-existent trait with autoload explicitly enabled:\\n\";\nvar_dump( trait_exists('D', false) );\necho \"\\nCalling trait_exists() on existing trait with autoload explicitly disabled:\\n\";\nvar_dump( trait_exists('MyTrait', false) );\necho \"\\nCalling trait_exists() on non-existent trait with autoload unspecified:\\n\";\nvar_dump( trait_exists('E') );\necho \"\\nCalling trait_exists() on existing trait with autoload unspecified:\\n\";\nvar_dump( trait_exists('MyTrait') );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
