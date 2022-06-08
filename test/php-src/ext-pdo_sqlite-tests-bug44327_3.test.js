// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/bug44327_3.phpt
  it("Bug #44327.3 (PDORow::queryString property & numeric offsets / Crash)", function () {
    expect(parser.parseCode("<?php\n$db = new PDO('sqlite::memory:');\n$x = $db->query('select 1 as queryStringxx');\n$y = $x->fetch(PDO::FETCH_LAZY);\nvar_dump($y, $y->queryString, $y->queryStringzz, $y->queryStringxx);\nprint \"---\\n\";\nvar_dump($y[5], $y->{3});\n?>")).toMatchSnapshot();
  });
});
