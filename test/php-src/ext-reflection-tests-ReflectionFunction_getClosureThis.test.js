// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionFunction_getClosureThis.phpt
  it("Reflection::getClosureThis()", function () {
    expect(parser.parseCode("<?php\n$closure = function($param) { return \"this is a closure\"; };\n$rf = new ReflectionFunction($closure);\nvar_dump($rf->getClosureThis());\necho \"Done!\\n\";\n?>")).toMatchSnapshot();
  });
});
