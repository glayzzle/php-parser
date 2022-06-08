// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3stmt_paramCount_basic.phpt
  it("SQLite3Stmt::paramCount basic test", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . '/new_db.inc');\necho \"Creating Table\\n\";\nvar_dump($db->exec('CREATE TABLE foobar (id INTEGER, name STRING, city STRING)'));\necho \"INSERT into table\\n\";\nvar_dump($db->exec(\"INSERT INTO foobar (id, name, city) VALUES (1, 'john', 'LA')\"));\nvar_dump($db->exec(\"INSERT INTO foobar (id, name, city) VALUES (2, 'doe', 'SF')\"));\n$queryArray = array(\n    \"SELECT * FROM foobar WHERE id = ? ORDER BY id ASC\",\n    \"SELECT * FROM foobar WHERE id = 2 ORDER BY id ASC\",\n    \"SELECT * FROM foobar WHERE id = :id AND name = :name ORDER BY id ASC\",\n    \"SELECT * FROM foobar WHERE id = 1 AND name = :name ORDER BY id ASC\",\n);\necho \"SELECTING results\\n\";\nforeach($queryArray as $key => $query) {\n    $stmt = $db->prepare($query);\n    echo 'Param count for query ' . ($key + 1) . \":\\n\";\n    var_dump($stmt->paramCount());\n    $result = $stmt->execute();\n}\necho \"Closing database\\n\";\n$stmt = null;\n$result = null;\nvar_dump($db->close());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
