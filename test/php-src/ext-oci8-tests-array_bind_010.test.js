// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/array_bind_010.phpt
  it("oci_bind_array_by_name() and invalid values 8", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/connect.inc';\n$statement = oci_parse($c, 'SELECT user FROM all_objects');\n$array = Array(1,2,3,4,5);\noci_bind_array_by_name($statement, \":c1\", $array, 5, 5, SQLT_CHR);\noci_execute($statement);\nvar_dump($array);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
