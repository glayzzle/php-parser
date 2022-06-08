// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba007.phpt
  it("DBA Multiple File Creation Test", function () {
    expect(parser.parseCode("<?php\n    require_once(__DIR__ .'/test.inc');\n    echo \"database handler: $handler\\n\";\n    $db_file1 = $db_filename1 = __DIR__.'/test1.dbm';\n    $db_file2 = $db_filename2 = __DIR__.'/test2.dbm';\n    if (($db_file=dba_open($db_file, \"n\", $handler))!==FALSE) {\n        echo \"database file created\\n\";\n    } else {\n        echo \"$db_file does not exist\\n\";\n    }\n    if (($db_file1=dba_open($db_file1, \"n\", $handler))!==FALSE) {\n        echo \"database file created\\n\";\n    } else {\n        echo \"$db_file does not exist\\n\";\n    }\n    if (($db_file2=dba_open($db_file2, \"n\", $handler))!==FALSE) {\n        echo \"database file created\\n\";\n    } else {\n        echo \"$db_file does not exist\\n\";\n    }\n    var_dump(dba_list());\n    dba_close($db_file);\n    @unlink($db_filename1);\n    @unlink($db_filename2);\n?>")).toMatchSnapshot();
  });
});
