// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/no-new.phpt
  it("Enum no new", function () {
    expect(parser.parseCode("<?php\nenum Foo {}\ntry {\n    new Foo();\n} catch (\\Error $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
