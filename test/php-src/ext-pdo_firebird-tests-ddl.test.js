// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_firebird/tests/ddl.phpt
  it("PDO_Firebird: DDL/transactions", function () {
    expect(parser.parseCode("<?php\n    require(\"testdb.inc\");\n    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);\n    @$dbh->exec('DROP TABLE ddl');\n    @$dbh->exec('DROP GENERATOR gen_ddl_id');\n    @$dbh->exec('DROP TRIGGER ddl_bi');\n    $dbh->exec(\"CREATE TABLE ddl (id INT NOT NULL PRIMARY KEY, text BLOB SUB_TYPE 1)\");\n    $dbh->exec(\"CREATE GENERATOR gen_ddl_id\");\n    $dbh->exec(\"CREATE TRIGGER ddl_bi FOR ddl BEFORE INSERT AS\n        BEGIN IF (NEW.id IS NULL) THEN NEW.id=GEN_ID(gen_ddl_id,1); END\");\n    $dbh->setAttribute(PDO::ATTR_AUTOCOMMIT,0);\n    $dbh->beginTransaction();\n    var_dump($dbh->exec(\"INSERT INTO ddl (text) VALUES ('bla')\"));\n    var_dump($dbh->exec(\"UPDATE ddl SET text='blabla'\"));\n    $dbh->rollback();\n    $dbh->beginTransaction();\n    var_dump($dbh->exec(\"DELETE FROM ddl\"));\n    $dbh->commit();\n    unset($dbh);\n    echo \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
