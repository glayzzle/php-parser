// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug38234.phpt
  it("Bug #38234 (Exception in __clone makes memory leak)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    function __clone() {\n        throw new Exception();\n    }\n}\ntry {\n    $x = new Foo();\n    $y = clone $x;\n} catch (Exception $e) {\n}\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
