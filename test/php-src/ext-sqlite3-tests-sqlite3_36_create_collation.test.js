// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_36_create_collation.phpt
  it("Test SQLite3::createCollation() by adding strnatcmp() as an SQL COLLATE sequence", function () {
    expect(parser.parseCode("<?php\nrequire_once __DIR__ .  '/new_db.inc';\n$db->createCollation('NAT', 'strnatcmp');\n$db->exec('CREATE TABLE t (s varchar(4))');\n$stmt = $db->prepare('INSERT INTO t VALUES (?)');\nforeach(array('a1', 'a10', 'a2') as $s){\n    $stmt->bindParam(1, $s);\n    $stmt->execute();\n}\n$defaultSort = $db->query('SELECT s FROM t ORDER BY s');             //memcmp() sort\n$naturalSort = $db->query('SELECT s FROM t ORDER BY s COLLATE NAT'); //strnatcmp() sort\necho \"default\\n\";\nwhile ($row = $defaultSort->fetchArray()){\n    echo $row['s'], \"\\n\";\n}\necho \"natural\\n\";\nwhile ($row = $naturalSort->fetchArray()){\n    echo $row['s'], \"\\n\";\n}\n$db->close();\n?>")).toMatchSnapshot();
  });
});
