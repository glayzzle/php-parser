// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_get_client_version.phpt
  it("mysqli_get_client_version()", function () {
    expect(parser.parseCode("<?php\n    if (!is_int($info = mysqli_get_client_version()) || ($info < 100))\n        printf(\"[001] Expecting int/any_non_empty, got %s/%s\\n\", gettype($info), $info);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
