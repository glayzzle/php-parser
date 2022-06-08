// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/destructor_and_echo.phpt
  it("ZE2 Destructors and echo", function () {
    expect(parser.parseCode("<?php\nclass Test\n{\n    function __construct() {\n        echo __METHOD__ . \"\\n\";\n    }\n    function __destruct() {\n        echo __METHOD__ . \"\\n\";\n    }\n}\n$o = new Test;\n?>\n===DONE===")).toMatchSnapshot();
  });
});
