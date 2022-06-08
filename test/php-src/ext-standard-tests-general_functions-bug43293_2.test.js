// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug43293_2.phpt
  it("Bug #43293 (Multiple segfaults in getopt())", function () {
    expect(parser.parseCode("<?php\n$argv = array(true, false);\nvar_dump(getopt(\"abcd\"));\n?>")).toMatchSnapshot();
  });
});
