// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_firebird/tests/bug_72931.phpt
  it("PDO_Firebird: Bug 72931 Insert returning fails on Firebird 3", function () {
    expect(parser.parseCode("<?php\nrequire 'testdb.inc';\n$dbh->exec('recreate table tablea (id integer)');\n$S = $dbh->prepare('insert into tablea (id) values (1) returning id');\n$S->execute();\n$D = $S->fetch(PDO::FETCH_NUM);\necho $D[0];\nunset($S);\nunset($dbh);\n?>")).toMatchSnapshot();
  });
});
