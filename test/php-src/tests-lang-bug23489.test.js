// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug23489.phpt
  it("Bug #23489 (ob_start() is broken with method callbacks)", function () {
    expect(parser.parseCode("<?php\nclass Test {\n  function __construct() {\n    ob_start(\n      array(\n        $this, 'transform'\n      )\n    );\n  }\n  function transform($buffer) {\n    return 'success';\n  }\n}\n$t = new Test;\n?>\nfailure")).toMatchSnapshot();
  });
});
