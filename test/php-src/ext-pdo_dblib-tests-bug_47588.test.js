// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_dblib/tests/bug_47588.phpt
  it("PDO_DBLIB: Quoted field names", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/config.inc';\n$db->query('CREATE TABLE \"Test Table\" (\"My Field\" int, \"Another Field\" varchar(32) not null default \\'test_string\\')');\n$db->query('INSERT INTO \"Test Table\" (\"My Field\") values(1)');\n$db->query('INSERT INTO \"Test Table\" (\"My Field\") values(2)');\n$db->query('INSERT INTO \"Test Table\" (\"My Field\") values(3)');\n$rs = $db->query('SELECT * FROM \"Test Table\"');\nvar_dump($rs->fetchAll(PDO::FETCH_ASSOC));\n$db->query('DROP TABLE \"Test Table\"');\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
