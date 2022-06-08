// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/068.phpt
  it("mysqli get_client_info", function () {
    expect(parser.parseCode("<?php\n    $s = mysqli_get_client_info();\n    echo gettype($s);\n?>")).toMatchSnapshot();
  });
});
