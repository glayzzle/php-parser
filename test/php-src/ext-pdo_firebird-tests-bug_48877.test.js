// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_firebird/tests/bug_48877.phpt
  it("PDO_Firebird: bug 48877 The \"bindValue\" and \"bindParam\" do not work for PDO Firebird if we use named parameters (:parameter).", function () {
    expect(parser.parseCode("<?php\nrequire(\"testdb.inc\");\n$value = '2';\n$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_SILENT);\n@$dbh->exec('DROP TABLE testz');\n$dbh->exec('CREATE TABLE testz (A integer)');\n$dbh->exec(\"INSERT INTO testz VALUES ('1')\");\n$dbh->exec(\"INSERT INTO testz VALUES ('2')\");\n$dbh->exec(\"INSERT INTO testz VALUES ('3')\");\n$dbh->commit();\n$query = \"SELECT * FROM testz WHERE A = :paramno\";\n$stmt = $dbh->prepare($query);\n$stmt->bindParam(':paramno', $value, PDO::PARAM_STR);\n$stmt->execute();\n$rows = $stmt->fetch();\nvar_dump($stmt->fetch());\nvar_dump($stmt->rowCount());\n$stmt = $dbh->prepare('DELETE FROM testz');\n$stmt->execute();\n$dbh->commit();\n$dbh->exec('DROP TABLE testz');\nunset($stmt);\nunset($dbh);\n?>")).toMatchSnapshot();
  });
});
