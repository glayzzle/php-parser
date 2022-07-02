// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug21849.phpt
  it("Bug #21849 (self::constant doesn't work as method's default parameter)", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    const bar = \"fubar\\n\";\n    function __construct($arg = self::bar) {\n        echo $arg;\n    }\n}\nnew foo();\n?>")).toMatchSnapshot();
  });
});
