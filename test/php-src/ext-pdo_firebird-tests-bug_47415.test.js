// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_firebird/tests/bug_47415.phpt
  it("Bug #47415 PDO_Firebird segfaults when passing lowercased column name to bindColumn()", function () {
    expect(parser.parseCode("<?php\nrequire 'testdb.inc';\n$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_SILENT);\n@$dbh->exec('DROP TABLE testz');\n$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);\n$dbh->exec('CREATE TABLE testz (idx int NOT NULL PRIMARY KEY, txt VARCHAR(20))');\n$dbh->exec('INSERT INTO testz VALUES(0, \\'String0\\')');\n$dbh->commit();\n$query = \"SELECT idx, txt FROM testz ORDER by idx\";\n$idx = $txt = 0;\n$stmt = $dbh->prepare($query);\n$stmt->bindColumn('idx', $idx);\n$stmt->bindColumn('txt', $txt);\n$stmt->execute();\n$rows = $stmt->fetch(PDO::FETCH_BOUND);\nvar_dump($stmt->fetch());\nvar_dump($stmt->rowCount());\n$stmt = $dbh->prepare('DELETE FROM testz');\n$stmt->execute();\n$dbh->commit();\nunset($stmt);\nunset($dbh);\n?>")).toMatchSnapshot();
  });
});
