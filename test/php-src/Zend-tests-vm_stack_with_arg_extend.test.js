// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/vm_stack_with_arg_extend.phpt
  it("Ensure valid vm_stack even when it needed to be copied to a new page", function () {
    expect(parser.parseCode("<?php\nfunction f(...$args) {\n    var_dump(count($args));\n}\n(function(){\n    $a = array_fill(0, 1024, true);\n    f(...$a);\n    yield;\n})()->valid();\n?>")).toMatchSnapshot();
  });
});
