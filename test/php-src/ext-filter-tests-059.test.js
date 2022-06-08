// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/059.phpt
  it("filter_var() and FILTER_SANITIZE_ADD_SLASHES", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_var(\"test'asd'asd'' asd\\'\\\"asdfasdf\", FILTER_SANITIZE_ADD_SLASHES));\nvar_dump(filter_var(\"'\", FILTER_SANITIZE_ADD_SLASHES));\nvar_dump(filter_var(\"\", FILTER_SANITIZE_ADD_SLASHES));\nvar_dump(filter_var(-1, FILTER_SANITIZE_ADD_SLASHES));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
