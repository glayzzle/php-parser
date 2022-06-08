// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/bug77051.phpt
  it("Bug #77051 SQLite3::bindParam memory bug when missing ::reset call", function () {
    expect(parser.parseCode("<?php\n$db = new SQLite3(':memory:');\n$db->enableExceptions(true);\n$stmt = $db->prepare('SELECT :a, :b, ?;');\n$a = 42;\n$stmt->bindParam(':a', $a, SQLITE3_INTEGER);\n$stmt->bindValue(':b', 'php');\n$stmt->bindValue(':b', 'PHP');\n$stmt->bindValue(3, 424242);\necho \"Execute statement\\n\";\nvar_dump($res = $stmt->execute());\necho \"Statement result\\n\";\nvar_dump($res->fetchArray(SQLITE3_NUM));\necho \"Change binded param to wrong type\\n\";\n$a = 'TEST';\necho \"Execute statement\\n\";\nvar_dump($res = $stmt->execute());\necho \"Statement result\\n\";\nvar_dump($res->fetchArray(SQLITE3_NUM));\necho \"Change binded values\\n\";\n$a = 5252552;\n$stmt->bindValue(':b', 'TEST');\n$stmt->bindValue(3, '!!!');\necho \"Execute statement\\n\";\nvar_dump($res = $stmt->execute());\necho \"Statement result\\n\";\nvar_dump($res->fetchArray(SQLITE3_NUM));\n?>")).toMatchSnapshot();
  });
});
