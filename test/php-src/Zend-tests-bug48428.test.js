// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug48428.phpt
  it("Bug #48428 (crash when exception is thrown while passing function arguments)", function () {
    expect(parser.parseCode("<?php\ntry {\n        function x() { throw new Exception(\"ERROR\"); }\n                x(x());\n} catch(Exception $e) {\n        echo($e -> getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
