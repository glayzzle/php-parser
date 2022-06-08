// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/012.phpt
  it("registering $_SESSION should not segfault", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\n### Absurd example, value of $_SESSION does not matter\nsession_id(\"test012\");\nsession_start();\n$_SESSION[\"_SESSION\"] = Array();\n$_SESSION = \"kk\";\nsession_write_close();\n### Restart to test for $_SESSION brokenness\nsession_start();\n$_SESSION = \"kk\";\nsession_destroy();\nprint \"I live\\n\";\n?>")).toMatchSnapshot();
  });
});
