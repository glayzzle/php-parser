// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba005.phpt
  it("DBA FirstKey/NextKey Loop Test With 5 Items", function () {
    expect(parser.parseCode("<?php\n    require_once(__DIR__ .'/test.inc');\n    echo \"database handler: $handler\\n\";\n    if (($db_file=dba_open($db_file, \"n\", $handler))!==FALSE) {\n        dba_insert(\"key1\", \"Content String 1\", $db_file);\n        dba_insert(\"key2\", \"Content String 2\", $db_file);\n        dba_insert(\"key3\", \"Third Content String\", $db_file);\n        dba_insert(\"key4\", \"Another Content String\", $db_file);\n        dba_insert(\"key5\", \"The last content string\", $db_file);\n        $a = dba_firstkey($db_file);\n        $i=0;\n        while($a) {\n            $a = dba_nextkey($db_file);\n            $i++;\n        }\n        echo $i;\n        for ($i=1; $i<6; $i++) {\n            echo dba_exists(\"key$i\", $db_file) ? \"Y\" : \"N\";\n        }\n        dba_close($db_file);\n    } else {\n        echo \"Error creating database\\n\";\n    }\n?>")).toMatchSnapshot();
  });
});
