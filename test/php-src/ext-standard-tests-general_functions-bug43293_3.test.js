// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug43293_3.phpt
  it("Bug #43293 (Multiple segfaults in getopt())", function () {
    expect(parser.parseCode("<?php\n$args = array(true, false, \"f\");\nvar_dump(getopt(\"f\", $args), $args);\n?>")).toMatchSnapshot();
  });
});
