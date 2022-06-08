// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/bug47159.phpt
  it("Bug #45798 (sqlite3 doesn't track unexecuted statements)", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . '/new_db.inc');\n$stmt = $db->prepare(\"SELECT 1\");\nvar_dump($stmt->close());\nvar_dump($db->close());\nprint \"done\";\n?>")).toMatchSnapshot();
  });
});
