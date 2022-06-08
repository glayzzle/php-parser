// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba_db4_018.phpt
  it("DBA DB4 with persistent connections", function () {
    expect(parser.parseCode("<?php\n$handler = \"db4\";\nrequire_once(__DIR__ .'/test.inc');\necho \"database handler: $handler\\n\";\necho \"Test 1\\n\";\n$db_file1 = dba_popen($db_filename, 'n', 'flatfile');\ndba_insert(\"key1\", \"This is a test insert 1\", $db_file1);\necho dba_fetch(\"key1\", $db_file1), \"\\n\";\necho \"Test 2\\n\";\n$db_file2 = dba_popen($db_filename, 'n', 'flatfile');\nif ($db_file1 === $db_file2) {\n    echo \"resources are the same\\n\";\n} else {\n    echo \"resources are different\\n\";\n}\necho \"Test 3 - fetch both rows from second resource\\n\";\ndba_insert(\"key2\", \"This is a test insert 2\", $db_file2);\necho dba_fetch(\"key1\", $db_file2), \"\\n\";\necho dba_fetch(\"key2\", $db_file2), \"\\n\";\necho \"Test 4 - fetch both rows from first resource\\n\";\necho dba_fetch(\"key1\", $db_file1), \"\\n\";\necho dba_fetch(\"key2\", $db_file1), \"\\n\";\necho \"Test 5 - close 2nd resource\\n\";\ndba_close($db_file2);\nvar_dump($db_file1);\nvar_dump($db_file2);\necho \"Test 6 - query after closing 2nd resource\\n\";\necho dba_fetch(\"key1\", $db_file1), \"\\n\";\necho dba_fetch(\"key2\", $db_file1), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
