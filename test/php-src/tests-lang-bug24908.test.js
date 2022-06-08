// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug24908.phpt
  it("Bug #24908 (super-globals can not be used in __destruct())", function () {
    expect(parser.parseCode("<?php\nclass test {\n    function __construct() {\n        if (count($_SERVER)) echo \"O\";\n    }\n    function __destruct() {\n        if (count($_SERVER)) echo \"K\\n\";\n    }\n}\n$test = new test();\n?>")).toMatchSnapshot();
  });
});
