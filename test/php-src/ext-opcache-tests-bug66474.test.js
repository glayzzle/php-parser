// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug66474.phpt
  it("Bug #66474 (Optimizer bug in constant string to boolean conversion)", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $speed = 'slow' || 'fast';\n}\nfoo();\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
