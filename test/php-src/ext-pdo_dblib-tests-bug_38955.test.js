// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_dblib/tests/bug_38955.phpt
  it(" PDO_DBLIB driver does not support transactions", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/config.inc';\n/*We see these rows */\n$db->query(\"CREATE table php_test(val int)\");\n$db->beginTransaction();\n$db->query(\"INSERT INTO php_test(val) values(1)\");\n$db->query(\"INSERT INTO php_test(val) values(2)\");\n$db->query(\"INSERT INTO php_test(val) values(3)\");\n$db->query(\"INSERT INTO php_test(val) values(4)\");\n$db->commit();\n/*We don't see these rows */\n$db->beginTransaction();\n$db->query(\"INSERT INTO php_test(val) values(5)\");\n$db->query(\"INSERT INTO php_test(val) values(6)\");\n$db->query(\"INSERT INTO php_test(val) values(7)\");\n$db->query(\"INSERT INTO php_test(val) values(8)\");\n$db->rollback();\n$rs = $db->query(\"SELECT * FROM php_test\");\n$rows = $rs->fetchAll(PDO::FETCH_ASSOC);\nvar_dump($rows);\n$db->query(\"DROP table php_test\");\n?>")).toMatchSnapshot();
  });
});
