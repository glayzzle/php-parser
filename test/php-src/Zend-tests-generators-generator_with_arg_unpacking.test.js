// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/generator_with_arg_unpacking.phpt
  it("Generators with arguments unpacking", function () {
    expect(parser.parseCode("<?php\n(function() { yield; })(...range(1, 16384));\ncall_user_func_array(function() { yield; }, range(1, 16384));\n$g = (function() { yield; })(...range(1, 16384));\n$g = call_user_func_array(function() { yield; }, range(1, 16384));\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
