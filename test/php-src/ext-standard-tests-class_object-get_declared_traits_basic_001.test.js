// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/get_declared_traits_basic_001.phpt
  it("Test get_declared_traits() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing get_declared_traits() : basic functionality ***\\n\";\ntrait MyTrait {}\n// Zero arguments\necho \"\\n-- Testing get_declared_traits() function with Zero arguments --\\n\";\nvar_dump(get_declared_traits());\nforeach (get_declared_traits() as $trait) {\n    if (!trait_exists($trait)) {\n        echo \"Error: $trait is not a valid trait.\\n\";\n    }\n}\necho \"\\n-- Ensure trait is listed --\\n\";\nvar_dump(in_array('MyTrait', get_declared_traits()));\necho \"\\n-- Ensure userspace interfaces are not listed --\\n\";\ninterface I {}\nvar_dump(in_array( 'I', get_declared_traits()));\necho \"\\n-- Ensure userspace classes are not listed --\\n\";\nclass MyClass {}\nvar_dump(in_array( 'MyClass', get_declared_traits()));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
