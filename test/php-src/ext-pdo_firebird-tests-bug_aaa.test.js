// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_firebird/tests/bug_aaa.phpt
  it("PDO_Firebird: cursor should not be marked as opened on singleton statements", function () {
    expect(parser.parseCode("<?php\nrequire 'testdb.inc';\n$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);\n@$dbh->exec('drop table ta_table');\n$dbh->exec('create table ta_table (id integer)');\n$S = $dbh->prepare('insert into ta_table (id) values (:id) returning id');\n$S->execute(['id' => 1]);\n$S->execute(['id' => 2]);\nunset($S);\nunset($dbh);\necho 'OK';\n?>")).toMatchSnapshot();
  });
});
