// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/012.phpt
  it("filter_input()", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_input(INPUT_GET, \"test\"));\nvar_dump(filter_input(INPUT_POST, \"test\"));\nvar_dump(filter_input(INPUT_COOKIE, \"\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
