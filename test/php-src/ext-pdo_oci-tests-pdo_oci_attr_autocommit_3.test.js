// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_oci/tests/pdo_oci_attr_autocommit_3.phpt
  it("PDO_OCI: Attribute: closing a connection in non-autocommit mode commits data", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__ . '/../../pdo/tests/pdo_test.inc');\n// Check connection can be created with AUTOCOMMIT off\nputenv('PDOTEST_ATTR='.serialize(array(PDO::ATTR_AUTOCOMMIT=>false)));\n$dbh = PDOTest::factory();\n$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_SILENT);\n$dbh->exec(\"drop table pdo_ac_tab\");\n$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\nprint \"PDO::ATTR_AUTOCOMMIT: \";\nvar_dump($dbh->getAttribute(PDO::ATTR_AUTOCOMMIT));\necho \"Insert data\\n\";\n$dbh->exec(\"create table pdo_ac_tab (col1 varchar2(20))\");\n$dbh->exec(\"insert into pdo_ac_tab (col1) values ('some data')\");\n$dbh = null; // close first connection\necho \"Second connection should be able to see committed data\\n\";\n$dbh2 = PDOTest::factory();\n$s = $dbh2->prepare(\"select col1 from pdo_ac_tab\");\n$s->execute();\nwhile ($r = $s->fetch()) {\n    echo \"Data is: \" . $r[0] . \"\\n\";\n}\n$dbh2->exec(\"drop table pdo_ac_tab\");\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
