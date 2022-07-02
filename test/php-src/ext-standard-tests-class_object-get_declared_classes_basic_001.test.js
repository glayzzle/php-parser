// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/get_declared_classes_basic_001.phpt
  it("Test get_declared_classes() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing get_declared_classes() : basic functionality ***\\n\";\n// Zero arguments\necho \"\\n-- Testing get_declared_classes() function with Zero arguments --\\n\";\nvar_dump(get_declared_classes());\nforeach (get_declared_classes() as $class) {\n    if (!class_exists($class)) {\n        echo \"Error: $class is not a valid class.\\n\";\n    }\n}\necho \"\\n-- Ensure userspace classes are listed --\\n\";\nClass C {}\nvar_dump(in_array('C', get_declared_classes()));\necho \"\\n-- Ensure userspace interfaces are not listed --\\n\";\nInterface I {}\nvar_dump(in_array( 'I', get_declared_classes()));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
