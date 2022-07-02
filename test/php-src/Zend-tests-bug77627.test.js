// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug77627.phpt
  it("Fix for #77627 method_exists on Closure::__invoke without object returns false", function () {
    expect(parser.parseCode("<?php\nvar_dump(method_exists(Closure::class, \"__invoke\"));\nvar_dump(method_exists(Closure::class, \"__INVOKE\"));\n$closure = function(){};\nvar_dump(method_exists($closure, \"__INVOKE\"));\n?>")).toMatchSnapshot();
  });
});
