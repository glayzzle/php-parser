// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/isset_var_001.phpt
  it("ISSET_ISEMPTY_VAR 001: CONST operand of ISSET_ISEMPTY_VAR must be converted to STRING", function () {
    expect(parser.parseCode("<?php\nclass A {\n    function __destruct() {\n        $i=0;\n        if (isset($GLOBALS[$i])) y;\n    }\n}\nnew A;\n?>\nDONE")).toMatchSnapshot();
  });
});
