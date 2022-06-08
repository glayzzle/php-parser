// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/pecl_bug10194.phpt
  it("PECL Bug #10194 (segfault in Instant Client when memory_limit is reached inside the callback)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/connect.inc';\nrequire __DIR__.'/create_table.inc';\n$ora_sql = \"INSERT INTO\n                       \".$schema.$table_name.\" (clob)\n                      VALUES (empty_clob())\n                      \";\n$statement = oci_parse($c,$ora_sql);\noci_execute($statement);\n$ora_sql = \"SELECT clob FROM \".$schema.$table_name.\" FOR UPDATE\";\n$statement = oci_parse($c,$ora_sql);\noci_execute($statement, OCI_DEFAULT);\n$row = oci_fetch_assoc($statement);\n$string = str_repeat(\"test\", 32768*4*4);\nfor ($i = 0; $i < 8; $i++) {\n    $row['CLOB']->write($string);\n}\noci_commit($c);\n$ora_sql = \"SELECT clob FROM \".$schema.$table_name.\"\";\n$statement = oci_parse($c,$ora_sql);\noci_execute($statement);\n$row = oci_fetch_assoc($statement);\nvar_dump(strlen($row['CLOB']->load())); /* here it should fail */\nrequire __DIR__.'/drop_table.inc';\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
