// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba_cdb_001.phpt
  it("DBA CDB handler test", function () {
    expect(parser.parseCode("<?php\n$handler = 'cdb';\nrequire_once(__DIR__ .'/test.inc');\necho \"Test 0\\n\";\nif (($db_file = dba_open($db_filename, 'n', $handler))!==FALSE) {\n    var_dump(dba_insert(\"key1\", \"Content String 1\", $db_file));\n    var_dump(dba_replace(\"key1\", \"New Content String\", $db_file));\n    var_dump(dba_fetch(\"key1\", $db_file));\n    var_dump(dba_firstkey($db_file));\n    var_dump(dba_delete(\"key1\", $db_file));\n    var_dump(dba_optimize($db_file));\n    var_dump(dba_sync($db_file));\n    dba_close($db_file);\n}\nelse {\n    echo \"Failed to open DB\\n\";\n}\nunlink($db_filename);\necho \"Test 1\\n\";\nif (($db_file = dba_open($db_filename, 'c', $handler))!==FALSE) {\n    dba_insert(\"key1\", \"Content String 1\", $db_file);\n    dba_close($db_file);\n}\nelse {\n    echo \"Failed to open DB\\n\";\n}\necho \"Test 2\\n\";\nif (($db_file = dba_open($db_filename, 'r', $handler))!==FALSE) {\n    dba_insert(\"key1\", \"Content String 1\", $db_file);\n    dba_close($db_file);\n}\nelse {\n    echo \"Failed to open DB\\n\";\n}\necho \"Test 3\\n\";\nif (($db_file = dba_open($db_filename, 'w', $handler))!==FALSE) {\n    echo dba_fetch(\"key1\", $db_file), \"\\n\";\n    dba_close($db_file);\n}\nelse {\n    echo \"Failed to open DB\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
