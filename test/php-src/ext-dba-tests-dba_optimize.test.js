// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba_optimize.phpt
  it("DBA Optimize Test", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ .'/test.inc');\necho \"database handler: $handler\\n\";\nif (($db_file=dba_open($db_filename, \"n\", $handler))!==FALSE) {\n    dba_insert(\"key1\", \"Content String 1\", $db_file);\n    dba_insert(\"key2\", \"Content String 2\", $db_file);\n    $a = dba_firstkey($db_file);\n    $i=0;\n    while($a) {\n        $a = dba_nextkey($db_file);\n        $i++;\n    }\n    echo $i;\n    for ($i=1; $i<3; $i++) {\n        echo dba_exists(\"key$i\", $db_file) ? \"Y\" : \"N\";\n    }\n    echo \"\\n\";\n    var_dump(dba_optimize($db_file));\n    dba_close($db_file);\n} else {\n    echo \"Error creating database\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
