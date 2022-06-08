// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba010.phpt
  it("DBA with array keys", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ .'/test.inc');\necho \"database handler: $handler\\n\";\nif (($db_file=dba_open($db_file, \"n\", $handler))!==FALSE) {\n    dba_insert(array(\"\", \"name0\") , \"Content String 1\", $db_file);\n    dba_insert(array(\"key1\", \"name1\") , \"Content String 1\", $db_file);\n    dba_insert(array(\"key2\",\"name2\"), \"Content String 2\", $db_file);\n    dba_insert(\"[key3]name3\", \"Third Content String\", $db_file);\n    dba_insert(array(\"key4\",\"name4\"), \"Another Content String\", $db_file);\n    dba_insert(array(\"key5\",\"name5\"), \"The last content string\", $db_file);\n    $a = dba_firstkey($db_file);\n    $i=0;\n    while($a) {\n        $a = dba_nextkey($db_file);\n        $i++;\n    }\n    echo $i;\n    echo dba_exists(array(\"\",\"name0\"), $db_file) ? \"Y\" : \"N\";\n    for ($i=1; $i<5; $i++) {\n        echo dba_exists(\"[key$i]name$i\", $db_file) ? \"Y\" : \"N\";\n    }\n    echo dba_exists(array(\"key5\",\"name5\"), $db_file) ? \"Y\" : \"N\";\n    echo \"\\n\";\n    dba_close($db_file);\n} else {\n    echo \"Error creating database\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
