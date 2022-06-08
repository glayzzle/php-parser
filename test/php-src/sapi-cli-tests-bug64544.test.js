// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/bug64544.phpt
  it("Bug #64544 (Valgrind warnings after using putenv)", function () {
    expect(parser.parseCode("<?php\nputenv(\"HOME=/tmp\");\nvar_dump(getenv(\"HOME\"));\nputenv(\"FOO=BAR\");\nvar_dump(getenv(\"FOO\"));\n?>")).toMatchSnapshot();
  });
});
