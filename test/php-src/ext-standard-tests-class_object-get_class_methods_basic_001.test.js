// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/get_class_methods_basic_001.phpt
  it("Test get_class_methods() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic behaviour with existing class and non-existent class.\n */\necho \"*** Testing get_class_methods() : basic functionality ***\\n\";\nclass C {\n    function f() {}\n    function g() {}\n    function h() {}\n}\necho \"Argument is class name:\\n\";\nvar_dump( get_class_methods(\"C\") );\necho \"Argument is class instance:\\n\";\n$c = new C;\nvar_dump( get_class_methods($c) );\nclass D {}\necho \"Argument is name of class which has no methods:\\n\";\nvar_dump( get_class_methods(\"D\") );\necho \"Argument is non existent class:\\n\";\ntry {\n    var_dump( get_class_methods(\"NonExistent\") );\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
