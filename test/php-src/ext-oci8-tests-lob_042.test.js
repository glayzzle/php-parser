// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/lob_042.phpt
  it("Check various LOB error messages", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\nrequire(__DIR__.'/create_table.inc');\n$ora_sql = \"INSERT INTO\n                       \".$schema.$table_name.\" (blob)\n                      VALUES (empty_blob())\n                      RETURNING\n                               blob\n                      INTO :v_blob \";\n$statement = oci_parse($c,$ora_sql);\n$blob = oci_new_descriptor($c,OCI_D_LOB);\noci_bind_by_name($statement,\":v_blob\", $blob,-1,OCI_B_BLOB);\noci_execute($statement, OCI_DEFAULT);\nvar_dump($blob);\nvar_dump($blob->writeTemporary(\"test\", OCI_D_LOB));\n$str = \"string\";\nvar_dump($blob->write($str));\nvar_dump($blob->truncate(1));\nvar_dump($blob->truncate(1));\nvar_dump($blob->truncate(2));\nvar_dump($blob->read(2));\nvar_dump($blob->import(\"does_not_exist\"));\nvar_dump($blob->saveFile(\"does_not_exist\"));\ntry {\n    var_dump($blob->truncate(-1));\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nrequire(__DIR__.'/drop_table.inc');\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
