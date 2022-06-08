// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_incomplete_initialization.phpt
  it("Incomplete initialization edge case where mysql->mysql is NULL", function () {
    expect(parser.parseCode("<?php\nmysqli_report(MYSQLI_REPORT_OFF);\n$mysqli = new mysqli();\n@$mysqli->__construct('doesnotexist');\n$mysqli->close();\n?>")).toMatchSnapshot();
  });
});
