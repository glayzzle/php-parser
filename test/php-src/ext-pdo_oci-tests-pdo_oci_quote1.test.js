// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_oci/tests/pdo_oci_quote1.phpt
  it("Test PDO->quote() for PDO_OCI", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../pdo/tests/pdo_test.inc';\n$db = PDOTest::factory();\n@$db->exec(\"drop table poq_tab\");\n$db->query(\"create table poq_tab (t varchar2(100))\");\n$stmt = $db->prepare('select * from poq_tab');\n// The intent is that the fetched data be identical to the unquoted string.\n// Remember!: use bind variables instead of PDO->quote()\n$a = array(null, \"\", \"a\", \"ab\", \"abc\", \"ab'cd\", \"a\\b\\n\", \"'\", \"''\", \"a'\", \"'z\", \"a''b\", '\"');\nforeach ($a as $u) {\n    $q = $db->quote($u);\n    echo \"Unquoted : \";\n    var_dump($u);\n    echo \"Quoted   : \";\n    var_dump($q);\n    $db->exec(\"delete from poq_tab\");\n    $db->query(\"insert into poq_tab (t) values($q)\");\n    $stmt->execute();\n    var_dump($stmt->fetchAll(PDO::FETCH_ASSOC));\n}\necho \"Done\\n\";\n@$db->exec(\"drop table poq_tab\");\n?>")).toMatchSnapshot();
  });
});
