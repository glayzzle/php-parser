// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/bug44327_2.phpt
  it("Bug #44327.2 (PDORow::queryString property & numeric offsets / Crash)", function () {
    expect(parser.parseCode("<?php\n$db = new PDO('sqlite::memory:');\n$x = $db->query('select 1 as queryString');\nvar_dump($x, $x->queryString);\n$y = $x->fetch();\nvar_dump($y, @$y->queryString);\nprint \"--------------------------------------------\\n\";\n$x = $db->query('select 1 as queryString');\nvar_dump($x, $x->queryString);\n$y = $x->fetch(PDO::FETCH_LAZY);\nvar_dump($y, $y->queryString);\n?>")).toMatchSnapshot();
  });
});
