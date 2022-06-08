// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bug42173.phpt
  it("Bug #42173 (TIMESTAMP and INTERVAL query and field functions)", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n$stmts = array(\n\"drop table ts_test\",\n\"create table ts_test (\nc1 TIMESTAMP,\nc2 TIMESTAMP (5),\nc3 TIMESTAMP WITH TIME ZONE,\nc4 TIMESTAMP (2) WITH TIME ZONE,\nc5 TIMESTAMP WITH LOCAL TIME ZONE,\nc6 INTERVAL YEAR TO MONTH,\nc7 INTERVAL YEAR(2) TO MONTH,\nc8 INTERVAL DAY TO SECOND,\nc9 INTERVAL DAY(2) TO SECOND(3)\n)\",\n\"insert into ts_test values (\ntimestamp'1999-01-03 10:00:00.123',\ntimestamp'1999-01-04 10:00:00.123456',\ntimestamp'1999-01-05 10:00:00.123456+1:0',\ntimestamp'1999-01-06 10:00:00.123456-1:0',\ntimestamp'1999-01-06 10:00:00.123456-1:0',\ninterval'1-2' year to month,\ninterval'10-4' year to month,\ninterval'1 2:20:20.123' day to second,\ninterval'1 2:20:20.12345' day to second)\");\nforeach ($stmts as $sql) {\n    $s = oci_parse($c, $sql);\n    $r = @oci_execute($s);\n}\n$s = oci_parse($c, \"select * from ts_test\");\n$r = oci_execute($s);\n$row = oci_fetch_array($s, OCI_ASSOC);\nvar_dump($row);\nforeach ($row as $name => $field) {\n    echo \"\\nColumn $name\\n\";\n    var_dump(oci_field_is_null($s, $name));\n    var_dump(oci_field_name($s, $name));\n    var_dump(oci_field_type($s, $name));\n    var_dump(oci_field_type_raw($s, $name));\n    var_dump(oci_field_scale($s, $name));\n    var_dump(oci_field_precision($s, $name));\n    var_dump(oci_field_size($s, $name));\n}\n// Cleanup\n$s = oci_parse($c, \"drop table ts_test\");\n$r = @oci_execute($s);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
