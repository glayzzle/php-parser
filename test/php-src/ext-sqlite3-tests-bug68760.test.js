// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/bug68760.phpt
  it("Bug #68760 (Callback throws exception behaviour. Segfault in 5.6)", function () {
    expect(parser.parseCode("<?php\nfunction oopsFunction($a, $b) {\n    echo \"callback\".PHP_EOL;\n    throw new \\Exception(\"oops\");\n}\n$db = new SQLite3(\":memory:\");\n$db->exec(\"CREATE TABLE test (col1 string)\");\n$db->exec(\"INSERT INTO test VALUES ('a1')\");\n$db->exec(\"INSERT INTO test VALUES ('a10')\");\n$db->exec(\"INSERT INTO test VALUES ('a2')\");\ntry {\n    $db->createCollation('NATURAL_CMP', 'oopsFunction');\n    $naturalSort = $db->query(\"SELECT col1 FROM test ORDER BY col1 COLLATE NATURAL_CMP\");\n    while ($row = $naturalSort->fetchArray()) {\n        echo $row['col1'], \"\\n\";\n    }\n    $db->close();\n}\ncatch(\\Exception $e) {\n    echo \"Exception: \".$e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
