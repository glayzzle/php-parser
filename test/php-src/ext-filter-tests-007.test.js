// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/007.phpt
  it("filter_has_var()", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_has_var(INPUT_GET, \"a\"));\nvar_dump(filter_has_var(INPUT_GET, \"abc\"));\nvar_dump(filter_has_var(INPUT_GET, \"nonex\"));\nvar_dump(filter_has_var(INPUT_GET, \" \"));\nvar_dump(filter_has_var(INPUT_GET, \"\"));\nvar_dump(filter_has_var(INPUT_POST, \"b\"));\nvar_dump(filter_has_var(INPUT_POST, \"bbc\"));\nvar_dump(filter_has_var(INPUT_POST, \"nonex\"));\nvar_dump(filter_has_var(INPUT_POST, \" \"));\nvar_dump(filter_has_var(INPUT_POST, \"\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
