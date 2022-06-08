// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug50146.phpt
  it("Bug #50146 (property_exists: Closure object cannot have properties)", function () {
    expect(parser.parseCode("<?php\n$obj = function(){};\nvar_dump(property_exists($obj,'foo'));\n$ref = new ReflectionObject($obj);\nvar_dump($ref->hasProperty('b'));\nvar_dump(isset($obj->a));\n?>")).toMatchSnapshot();
  });
});
