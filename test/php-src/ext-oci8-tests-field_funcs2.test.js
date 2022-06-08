// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/field_funcs2.phpt
  it("Bug #41917 (invalid scale and precision)", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.\"/connect.inc\");\n$s = oci_parse($c, 'drop table field_funcs2_tab');\n@oci_execute($s);\n$t = array(\"C01\" => \"NUMBER\",\n           \"C02\" => \"NUMBER(*,1)\",\n           \"C03\" => \"NUMBER(9)\",\n           \"C04\" => \"NUMBER(9,2)\",\n           \"C05\" => \"NUMBER(9,1)\",\n           \"C06\" => \"NUMBER(7,-2)\",\n           \"C07\" => \"DECIMAL(4,9)\",\n           \"C08\" => \"NUMERIC(4,9)\",\n           \"C09\" => \"DECIMAL(4)\",\n           \"C10\" => \"INTEGER\",\n           \"C11\" => \"INT\",\n           \"C12\" => \"SMALLINT\",\n           \"C13\" => \"FLOAT\",\n           \"C14\" => \"FLOAT(9)\",\n           \"C15\" => \"DOUBLE PRECISION\",\n           \"C16\" => \"REAL\",\n           );\n$stmt = \"create table field_funcs2_tab (\\n\";\nforeach ($t as $colname => $type) {\n    $stmt .= \"$colname $type,\\n\";\n}\n$stmt[strlen($stmt)-2] = \")\";\n$s = oci_parse($c, $stmt);\noci_execute($s);\n$s = oci_parse($c, \"select * from field_funcs2_tab\");\noci_execute($s);\nfor ($i = 1; $i <= oci_num_fields($s); $i++) {\n    $name = oci_field_name($s, $i);\n    $precision = oci_field_precision($s, $i);\n    $scale = oci_field_scale($s, $i);\n    echo \"$name \".$t[$name] .\": precision $precision, scale $scale\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
