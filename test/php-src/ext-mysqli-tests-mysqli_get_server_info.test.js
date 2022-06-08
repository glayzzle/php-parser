// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_get_server_info.phpt
  it("mysqli_get_server_info()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    require \"table.inc\";\n    if (!is_string($info = mysqli_get_server_info($link)) || ('' === $info))\n        printf(\"[003] Expecting string/any_non_empty, got %s/%s\\n\", gettype($info), $info);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
