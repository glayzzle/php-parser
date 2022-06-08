// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_open_empty_string.phpt
  it("SQLite3::open test with empty string argument via the constructor", function () {
    expect(parser.parseCode("<?php\n$db = new SQLite3('');\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
