// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_firebird/tests/rowCount.phpt
  it("PDO_Firebird: rowCount", function () {
    expect(parser.parseCode("<?php\nrequire(\"testdb.inc\");\n$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_SILENT);\n@$dbh->exec('DROP TABLE testz');\n$dbh->exec('CREATE TABLE testz (A VARCHAR(10))');\n$dbh->exec(\"INSERT INTO testz VALUES ('A')\");\n$dbh->exec(\"INSERT INTO testz VALUES ('A')\");\n$dbh->exec(\"INSERT INTO testz VALUES ('B')\");\n$dbh->commit();\n$query = \"SELECT * FROM testz WHERE A = ?\";\n$stmt = $dbh->prepare($query);\n$stmt->execute(array('A'));\n$rows = $stmt->fetch();\n$rows = $stmt->fetch();\nvar_dump($stmt->fetch());\nvar_dump($stmt->rowCount());\n$stmt = $dbh->prepare('UPDATE testZ SET A=\"A\" WHERE A != ?');\n$stmt->execute(array('A'));\nvar_dump($stmt->rowCount());\n$dbh->commit();\n$stmt = $dbh->prepare('DELETE FROM testz');\n$stmt->execute();\nvar_dump($stmt->rowCount());\n$dbh->commit();\n$dbh->exec('DROP TABLE testz');\nunset($stmt);\nunset($dbh);\n?>")).toMatchSnapshot();
  });
});
