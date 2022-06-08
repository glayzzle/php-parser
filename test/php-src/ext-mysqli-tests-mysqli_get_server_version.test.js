// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_get_server_version.phpt
  it("mysqli_get_server_version()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    require \"table.inc\";\n    /* 5.1.5 -> 50105 -- major_version*10000 + minor_version *100 + sub_version */\n    /* < 30000 = pre 3.2.3, very unlikely! */\n    if (!is_int($info = mysqli_get_server_version($link)) || ($info < (3 * 10000)))\n        printf(\"[003] Expecting int/any >= 30000, got %s/%s\\n\", gettype($info), $info);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
