// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_firebird/tests/bug_72583.phpt
  it("PDO_Firebird: Feature 72583 Fetch integers as php integers not as strings", function () {
    expect(parser.parseCode("<?php\nrequire 'testdb.inc';\n$dbh->exec('recreate table atable (aint integer, asmi smallint)');\n$dbh->exec('insert into atable values (1, -1)');\n$S = $dbh->prepare('select aint, asmi from atable');\n$S->execute();\n$D = $S->fetch(PDO::FETCH_NUM);\necho gettype($D[0]).\"\\n\".gettype($D[1]);\nunset($S);\nunset($dbh);\n?>")).toMatchSnapshot();
  });
});
