// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/imp_res_get_none.phpt
  it("Oracle Database 12c Implicit Result Sets: oci_get_implicit_resultset: no implicit results", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n// Run Test\necho \"Test 1\\n\";\n$s = oci_parse($c, \"select * from dual\");\noci_execute($s);\nwhile (($s1 = oci_get_implicit_resultset($s))) {\n    while (($row = oci_fetch_array($s1, OCI_ASSOC+OCI_RETURN_NULLS)) != false) {\n        foreach ($row as $item) {\n            echo \"  \".$item;\n        }\n        echo \"\\n\";\n    }\n}\nvar_dump($s1);\n?>")).toMatchSnapshot();
  });
});
