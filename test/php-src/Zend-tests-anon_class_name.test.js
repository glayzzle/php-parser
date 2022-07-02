// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/anon_class_name.phpt
  it("Generated names for anonymous classes", function () {
    expect(parser.parseCode("<?php\nnamespace DeclaringNS {\n    class Test1 {}\n    interface Test2 {}\n    interface Test3 {}\n}\nnamespace UsingNS {\n    function print_name(object $obj) {\n        echo strstr(get_class($obj), \"\\0\", true), \"\\n\";\n    }\n    print_name(new class {});\n    print_name(new class extends \\DeclaringNS\\Test1 {});\n    print_name(new class extends \\DeclaringNS\\Test1 implements \\DeclaringNS\\Test2 {});\n    print_name(new class implements \\DeclaringNS\\Test2 {});\n    print_name(new class implements \\DeclaringNS\\Test2, \\DeclaringNS\\Test3 {});\n}\n?>")).toMatchSnapshot();
  });
});
