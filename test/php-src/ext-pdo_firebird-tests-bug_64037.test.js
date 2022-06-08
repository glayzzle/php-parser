// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_firebird/tests/bug_64037.phpt
  it("Bug #64037 Firebird return wrong value for numeric field", function () {
    expect(parser.parseCode("<?php\nrequire(\"testdb.inc\");\n$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);\n@$dbh->exec('DROP TABLE price');\n$dbh->exec(\"CREATE TABLE PRICE (ID INTEGER NOT NULL, TEXT VARCHAR(10), COST NUMERIC(15, 2))\");\n$dbh->exec(\"INSERT INTO PRICE (ID, TEXT, COST) VALUES (1, 'test', -1.0)\");\n$dbh->exec(\"INSERT INTO PRICE (ID, TEXT, COST) VALUES (2, 'test', -0.99)\");\n$dbh->exec(\"INSERT INTO PRICE (ID, TEXT, COST) VALUES (3, 'test', -1.01)\");\n$dbh->commit();\n$query = \"SELECT * from price order by ID\";\n$stmt = $dbh->prepare($query);\n$stmt->execute();\n$rows = $stmt->fetchAll();\nvar_dump($rows[0]['COST']);\nvar_dump($rows[1]['COST']);\nvar_dump($rows[2]['COST']);\n$stmt = $dbh->prepare('DELETE FROM price');\n$stmt->execute();\n$dbh->commit();\n$dbh->exec('DROP TABLE price');\nunset($stmt);\nunset($dbh);\n?>")).toMatchSnapshot();
  });
});
