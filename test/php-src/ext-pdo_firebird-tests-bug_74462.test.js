// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_firebird/tests/bug_74462.phpt
  it("PDO_Firebird: Bug #74462 Returns only NULLs for boolean fields", function () {
    expect(parser.parseCode("<?php\nrequire 'testdb.inc';\n$dbh->exec('recreate table atable (id integer not null, abool boolean)');\n$dbh->exec('insert into atable (id, abool) values (1, true)');\n$dbh->exec('insert into atable (id, abool) values (2, false)');\n$dbh->exec('insert into atable (id, abool) values (3, null)');\n$S = $dbh->query('select abool from atable order by id');\n$D = $S->fetchAll(PDO::FETCH_COLUMN);\nunset($S);\nunset($dbh);\nvar_dump($D);\n?>")).toMatchSnapshot();
  });
});
