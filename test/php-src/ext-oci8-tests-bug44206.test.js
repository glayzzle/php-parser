// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bug44206.phpt
  it("Bug #44206 (Test if selecting ref cursors leads to ORA-1000 maximum open cursors reached)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/connect.inc';\n// Run Test\nfor ($x = 0; $x < 400; $x++)\n{\n    $stmt = \"select cursor (select $x from dual) a,\n         cursor (select $x from dual) b\n         from dual\";\n    $s = oci_parse($c, $stmt);\n    $r = oci_execute($s);\n        if (!$r) {\n                echo \"Exiting $x\\n\";\n                exit;\n        }\n    $mode = OCI_ASSOC | OCI_RETURN_NULLS;\n    $result = oci_fetch_array($s, $mode);\n    oci_execute($result['A']);\n    oci_execute($result['B']);\n    oci_fetch_array($result['A'], $mode);\n    oci_fetch_array($result['B'], $mode);\n    oci_free_statement($result['A']);\n    oci_free_statement($result['B']);\n    oci_free_statement($s);\n}\necho \"Completed $x\\n\";\noci_close($c);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
