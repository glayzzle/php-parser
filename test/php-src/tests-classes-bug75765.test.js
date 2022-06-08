// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/bug75765.phpt
  it("Ensure that extending of undefined class throws the exception", function () {
    expect(parser.parseCode("<?php\ntry {\n    class A extends B {}\n} catch (Error $e) {\n    var_dump(class_exists('A'));\n    var_dump(class_exists('B'));\n    throw $e;\n}\n?>")).toMatchSnapshot();
  });
});
