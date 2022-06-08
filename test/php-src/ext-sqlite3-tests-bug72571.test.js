// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/bug72571.phpt
  it("Bug #72571 (SQLite3::bindValue, SQLite3::bindParam crash)", function () {
    expect(parser.parseCode("<?php\n$db = new SQLite3(':memory:');\n$stmt = $db->prepare(\"select 1 = ?\");\n// bindParam crash\n$i = 0;\n$stmt->bindParam(0, $i);\nvar_dump($stmt->execute());\n$db->close();\n?>")).toMatchSnapshot();
  });
});
