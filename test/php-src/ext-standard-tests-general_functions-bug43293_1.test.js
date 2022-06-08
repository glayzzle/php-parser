// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug43293_1.phpt
  it("Bug #43293 (Multiple segfaults in getopt())", function () {
    expect(parser.parseCode("<?php\n$argv = array(1, 2, 3);\nvar_dump(getopt(\"abcd\"));\nvar_dump($argv);\n$argv = null;\nvar_dump(getopt(\"abcd\"));\n?>")).toMatchSnapshot();
  });
});
