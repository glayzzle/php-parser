// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug38623.phpt
  it("Bug #38623 (leaks in a tricky code with switch() and exceptions)", function () {
    expect(parser.parseCode("<?php\ntry {\n    switch(strtolower(\"apache\")) {\n        case \"apache\":\n            throw new Exception(\"test\");\n            break;\n    }\n} catch (Exception $e) {\n    echo \"ok\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
