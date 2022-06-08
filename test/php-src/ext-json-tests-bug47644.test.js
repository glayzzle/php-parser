// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug47644.phpt
  it("Bug #47644 (valid large integers are truncated)", function () {
    expect(parser.parseCode("<?php\nfor ($i = 10000000000000000; $i < 10000000000000006; $i++) {\n    var_dump(json_decode(\"[$i]\"));\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
