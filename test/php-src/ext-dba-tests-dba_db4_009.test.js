// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba_db4_009.phpt
  it("DBA DB4 Multiple File Creation Test", function () {
    expect(parser.parseCode("<?php\n$handler = \"db4\";\nrequire_once(__DIR__ .'/test.inc');\necho \"database handler: $handler\\n\";\n$db_file1 = $db_filename1 = __DIR__.'/test1.dbm';\n$db_file2 = $db_filename2 = __DIR__.'/test2.dbm';\nif (($db_file=dba_open($db_file, \"n\", $handler))!==FALSE) {\n    echo \"database file created\\n\";\n} else {\n    echo \"$db_file does not exist\\n\";\n}\nif (($db_file1=dba_open($db_file1, \"n\", $handler))!==FALSE) {\n    echo \"database file created\\n\";\n} else {\n    echo \"$db_file does not exist\\n\";\n}\nif (($db_file2=dba_open($db_file2, \"n\", $handler))!==FALSE) {\n    echo \"database file created\\n\";\n} else {\n    echo \"$db_file does not exist\\n\";\n}\nvar_dump(dba_list());\ndba_close($db_file);\n@unlink($db_filename1);\n@unlink($db_filename2);\n?>")).toMatchSnapshot();
  });
});
