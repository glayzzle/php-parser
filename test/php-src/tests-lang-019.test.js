// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/019.phpt
  it("eval() test", function () {
    expect(() => parser.parseCode("<?php\neval(\"function test() { echo \\\"hey, this is a function inside an eval()!\\\\n\\\"; }\");\n$i=0;\nwhile ($i<10) {\n  eval(\"echo \\\"hey, this is a regular echo'd eval()\\\\n\\\";\");\n  test();\n  $i++;\n}\neval('-');\n?>")).toThrowErrorMatchingSnapshot();
  });
});
