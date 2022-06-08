// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/stepping_001.phpt
  it("Stepping with exceptions must not be stuck at CATCH", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n\tthrow new Exception;\n}\ntry {\n\tfoo();\n} catch (Exception $e) {\n\techo \"ok\\n\";\n} finally {\n\techo \" ... ok\\n\";\n}\n")).toMatchSnapshot();
  });
});
