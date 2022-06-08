// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_31_changes.phpt
  it("SQLite3::changes (parameters) tests", function () {
    expect(parser.parseCode("<?php\n$db = new SQLite3(':memory:');\nvar_dump($db);\nvar_dump($db->changes());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
