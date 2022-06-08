// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/pecl_bug10194_blob.phpt
  it("PECL Bug #10194 (segfault in Instant Client when memory_limit is reached inside the callback)", function () {
    expect(parser.parseCode("<?php\n// This test is dependent on the behavior of the memory manager\nrequire(__DIR__.'/connect.inc');\nrequire(__DIR__.'/create_table.inc');\n$ora_sql = \"INSERT INTO \".$schema.$table_name.\" (blob) VALUES (empty_blob())\";\n$statement = oci_parse($c,$ora_sql);\noci_execute($statement);\n$ora_sql = \"SELECT blob FROM \".$schema.$table_name.\" FOR UPDATE\";\n$statement = oci_parse($c,$ora_sql);\noci_execute($statement, OCI_DEFAULT);\n$row = oci_fetch_assoc($statement);\n$string = str_repeat(\"test\", 32768*4*4);\nfor ($i = 0; $i < 8; $i++) {\n    $row['BLOB']->write($string);\n}\noci_commit($c);\n$ora_sql = \"SELECT blob FROM \".$schema.$table_name;\n$statement = oci_parse($c,$ora_sql);\noci_execute($statement);\necho \"Before load()\\n\";\n$row = oci_fetch_assoc($statement);\nvar_dump(strlen($row['BLOB']->load())); /* here it should fail */\nrequire __DIR__.'/drop_table.inc';\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
