// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bu69838.phpt
  it("Bug #69838 OPCACHE Warning Internal error: wrong size calculation", function () {
    expect(parser.parseCode("<?php\n$x = gethostbyname(\"localhost\");\n?>\n===DONE===")).toMatchSnapshot();
  });
});
