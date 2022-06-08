// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_exception3.phpt
  it("Exception thrown during SCCP evaluation, strict types variation", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\nvar_dump(str_contains(\"123\", 1));\n?>")).toMatchSnapshot();
  });
});
