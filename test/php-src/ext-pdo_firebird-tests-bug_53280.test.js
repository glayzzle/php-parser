// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_firebird/tests/bug_53280.phpt
  it("PDO_Firebird: bug 53280 segfaults if query column count is less than param count", function () {
    expect(parser.parseCode("<?php\nrequire(\"testdb.inc\");\n$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_SILENT);\n@$dbh->exec('DROP TABLE testz');\n$dbh->exec('CREATE TABLE testz(A VARCHAR(30), B VARCHAR(30), C VARCHAR(30))');\n$dbh->exec(\"INSERT INTO testz VALUES ('A', 'B', 'C')\");\n$dbh->commit();\n$stmt1 = \"SELECT B FROM testz WHERE A = ? AND B = ?\";\n$stmt2 = \"SELECT B, C FROM testz WHERE A = ? AND B = ?\";\n$stmth2 = $dbh->prepare($stmt2);\n$stmth2->execute(array('A', 'B'));\n$rows = $stmth2->fetchAll(); // <------ OK\nvar_dump($rows);\n$stmth1 = $dbh->prepare($stmt1);\n$stmth1->execute(array('A', 'B'));\n$rows = $stmth1->fetchAll(); // <------- segfault\nvar_dump($rows);\n$dbh->commit();\nunset($stmth1);\nunset($stmth2);\n$dbh->exec('DROP TABLE testz');\nunset($stmt);\nunset($dbh);\n?>")).toMatchSnapshot();
  });
});
