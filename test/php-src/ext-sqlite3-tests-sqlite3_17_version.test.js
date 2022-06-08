// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_17_version.phpt
  it("SQLite3::version()", function () {
    expect(parser.parseCode("<?php\nprint_r(SQLite3::version());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
