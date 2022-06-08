// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/func/005.phpt
  it("Testing register_shutdown_function()", function () {
    expect(parser.parseCode("<?php\nfunction foo()\n{\n    print \"foo\";\n}\nregister_shutdown_function(\"foo\");\nprint \"foo() will be called on shutdown...\\n\";\n?>")).toMatchSnapshot();
  });
});
