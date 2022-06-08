// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/lob_040.phpt
  it("Bug #37706 (Test LOB locator reuse. Extends simple test of lob_037.phpt)", function () {
    expect(parser.parseCode("<?php\ndefine('NUMLOBS', 200);\nrequire(__DIR__.'/connect.inc');\nrequire(__DIR__.'/create_table.inc');\nfor ($i = 0; $i < NUMLOBS; $i++) {\n    $s = oci_parse($c, \"insert into \".$schema.$table_name.\" (id, clob) values(\".$i.\", '\".$i.\"aaaa\".$i.$i.\"aaaaaaaaaaaaaaaaaaaaaaaaaaaz')\");\n    oci_execute($s);\n}\necho \"Test 1: CLOB as locator\\n\";\n$s = oci_parse($c, \"select clob from \".$schema.$table_name.\" order by id\");\noci_execute($s);\n$row = array();\nfor ($i = 0; $i < NUMLOBS; $i++) {\n    $row[$i] = oci_fetch_array($s, OCI_NUM);\n}\nfor ($i = 0; $i < NUMLOBS; $i++) {\n    echo \"Row $i Size:  \" . $row[$i][0]->size() . \"\\n\";\n    echo \"Pos 1: \" . $row[$i][0]->tell() . \"\\n\";\n    echo \"Data:  \" . $row[$i][0]->read(5) . \"\\n\";\n    echo \"Pos 2: \" . $row[$i][0]->tell() . \"\\n\";\n    echo \"Data:  \" . $row[$i][0]->read(12) . \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
