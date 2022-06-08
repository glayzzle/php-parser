// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/autoload_019.phpt
  it("Ensure __autoload() recursion is guarded for multiple lookups of same class using difference case.", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($name) {\n  echo \"autoload $name\\n\";\n  class_exists(\"undefinedCLASS\");\n});\nclass_exists(\"unDefinedClass\");\n?>")).toMatchSnapshot();
  });
});
