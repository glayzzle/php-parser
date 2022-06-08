// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3stmt_getsql_expanded.phpt
  it("SQLite3Stmt::getSQL expanded test", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . '/new_db.inc');\n$db->enableExceptions(true);\n$stmt = $db->prepare('SELECT :a, :b, ?;');\n$stmt->bindValue(':a', 42);\n$stmt->bindValue(':b', 'php');\n$stmt->bindValue(3, 43);\necho \"Getting expanded SQL statement\\n\";\nvar_dump($stmt->getSQL(true));\necho \"Execute statement\\n\";\nvar_dump($res = $stmt->execute());\necho \"Statement result\\n\";\nvar_dump($res->fetchArray(SQLITE3_NUM));\n$stmt->reset();\necho \"Change binded values\\n\";\n$stmt->bindValue(':a', 'TEST');\n$stmt->bindValue(':b', '!!!');\n$stmt->bindValue(3, 40);\necho \"Getting expanded SQL statement\\n\";\nvar_dump($stmt->getSQL(true));\necho \"Closing DB\\n\";\nvar_dump($db->close());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
