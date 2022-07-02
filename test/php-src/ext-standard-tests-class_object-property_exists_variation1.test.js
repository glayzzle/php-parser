// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/property_exists_variation1.phpt
  it("Test property_exists() function : class auto loading", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing property_exists() : class auto loading ***\\n\";\nspl_autoload_register(function ($class_name) {\n    require_once $class_name . '.inc';\n});\necho \"\\ntesting property in autoloaded class\\n\";\nvar_dump(property_exists(\"AutoTest\", \"bob\"));\necho \"\\ntesting __get magic method\\n\";\nvar_dump(property_exists(\"AutoTest\", \"foo\"));\n?>")).toMatchSnapshot();
  });
});
