// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/declare_005.phpt
  it("Testing declare statement with ticks", function () {
    expect(parser.parseCode("<?php\nregister_tick_function(function () { echo \"tick\\n\"; });\nfunction foo() { }\ndeclare(ticks=1) {\n$statement;\nfoo();\n}\n?>")).toMatchSnapshot();
  });
});
