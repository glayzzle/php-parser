// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_oci/tests/pdo_oci_attr_autocommit_1.phpt
  it("PDO_OCI: Attribute: Basic autocommit functionality", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__ . '/../../pdo/tests/pdo_test.inc');\n$dbh = PDOTest::factory();\n$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_SILENT);\n$dbh->exec(\"drop table pdo_ac_tab\");\n$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\nprint \"PDO::ATTR_AUTOCOMMIT: Default: \";\nvar_dump($dbh->getAttribute(PDO::ATTR_AUTOCOMMIT));\necho \"Change setting to false - \";\n$dbh->setAttribute(PDO::ATTR_AUTOCOMMIT, false);\nprint \"PDO::ATTR_AUTOCOMMIT: \";\nvar_dump($dbh->getAttribute(PDO::ATTR_AUTOCOMMIT));\necho \"Change setting back to true - \";\n$dbh->setAttribute(PDO::ATTR_AUTOCOMMIT, true);\nprint \"PDO::ATTR_AUTOCOMMIT: \";\nvar_dump($dbh->getAttribute(PDO::ATTR_AUTOCOMMIT));\n// Use 2nd connection to check that autocommit does commit\necho \"Insert data\\n\";\n$dbh->exec(\"create table pdo_ac_tab (col1 varchar2(20))\");\n$dbh->exec(\"insert into pdo_ac_tab (col1) values ('some data')\");\n$dbh2 = PDOTest::factory();\necho \"Second connection should be able to see committed data\\n\";\n$s = $dbh2->prepare(\"select col1 from pdo_ac_tab\");\n$s->execute();\nwhile ($r = $s->fetch()) {\n    echo \"Data is: \" . $r[0] . \"\\n\";\n}\n$dbh->exec(\"drop table pdo_ac_tab\");\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
