// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/get_declared_traits_004.phpt
  it("Testing get_declared_traits() and class_alias()", function () {
    expect(parser.parseCode("<?php\ntrait T { }\nclass_alias(\"T\", \"A\");\nforeach (get_declared_traits() as $name) {\n\tif (strlen($name) == 1) {\n\t\techo $name;\n\t}\n}\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
