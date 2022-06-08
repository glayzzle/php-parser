// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_004.phpt
  it("Throwing exception using a class that isn't derived from the Exception base class", function () {
    expect(parser.parseCode("<?php\nclass Foo { }\ntry {\n    throw new Foo();\n} catch (Foo $e) {\n    var_dump($e);\n}\n?>")).toMatchSnapshot();
  });
});
