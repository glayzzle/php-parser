// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_prepare_with_empty_string.phpt
  it("SQLite3::prepare test with empty string argument", function () {
    expect(parser.parseCode("<?php\n$db = new SQLite3(':memory:');\nvar_dump($db->prepare(''));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
