// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/get_declared_interfaces_basic_001.phpt
  it("Test get_declared_interfaces() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing get_declared_interfaces() : basic functionality ***\\n\";\n// Zero arguments\necho \"\\n-- Testing get_declared_interfaces() function with Zero arguments --\\n\";\nvar_dump(get_declared_interfaces());\nforeach (get_declared_interfaces() as $interface) {\n    if (!interface_exists($interface)) {\n        echo \"Error: $interface is not a valid interface.\\n\";\n    }\n}\necho \"\\n-- Ensure userspace classes are not listed --\\n\";\nClass C {}\nvar_dump(in_array('C', get_declared_interfaces()));\necho \"\\n-- Ensure userspace interfaces are listed --\\n\";\nInterface I {}\nvar_dump(in_array('I', get_declared_interfaces()));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
