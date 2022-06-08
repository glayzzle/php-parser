// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/array_bind_013.phpt
  it("oci_bind_array_by_name(), SQLT_CHR, default max_length and empty array", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/connect.inc';\n$statement = oci_parse($c, 'SELECT user FROM v$session');\n$array = array();\ntry {\n    var_dump(oci_bind_array_by_name($statement, \":c1\", $array, 5, -10, SQLT_CHR, -10));\n} catch (ArgumentCountError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nvar_dump(oci_bind_array_by_name($statement, \":c1\", $array, 5, -10));\nvar_dump(oci_bind_array_by_name($statement, \":c1\", $array, 5, -1));\nvar_dump(oci_bind_array_by_name($statement, \":c1\", $array, 5, 0));\n@oci_execute($statement);\nvar_dump($array);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
