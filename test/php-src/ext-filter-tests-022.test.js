// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/022.phpt
  it("filter_var() and FILTER_SANITIZE_EMAIL", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_var(\"a@b.c\", FILTER_SANITIZE_EMAIL));\nvar_dump(filter_var(\"a[!@#$%^&*()@a@#$%^&*(.com@#$%^&*(\", FILTER_SANITIZE_EMAIL));\nvar_dump(filter_var(\"white space here \\ \\ \\\" some more\", FILTER_SANITIZE_EMAIL));\nvar_dump(filter_var(\"\", FILTER_SANITIZE_EMAIL));\nvar_dump(filter_var(\"123456789000000\", FILTER_SANITIZE_EMAIL));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
