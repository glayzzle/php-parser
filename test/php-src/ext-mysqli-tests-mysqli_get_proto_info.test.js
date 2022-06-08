// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_get_proto_info.phpt
  it("mysqli_get_proto_info()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    require \"table.inc\";\n    if (!is_int($info = mysqli_get_proto_info($link)) || ($info < 1))\n        printf(\"[003] Expecting int/any_non_empty, got %s/%s\\n\", gettype($info), $info);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
