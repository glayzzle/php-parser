// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_prepare_001.phpt
  it("SQLite3 - memory leak on SQLite3Result and SQLite3Stmt", function () {
    expect(parser.parseCode("<?php\nfunction test(&$x) {\n    $class = new SQLite3(':memory:');\n    $x = $class->prepare('SELECT 1');\n}\ntest($foo);\necho \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
