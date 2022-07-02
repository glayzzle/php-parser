// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug24313.phpt
  it("Bug #24313 (file_exists() throws a warning on nonexistent files when is open_basedir enabled)", function () {
    expect(parser.parseCode("<?php\n    var_dump(file_exists(\"/dev/bogus_file_no_such_thing\"));\n?>")).toMatchSnapshot();
  });
});
