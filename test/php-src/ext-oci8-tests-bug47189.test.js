// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bug47189.phpt
  it("Bug #47189 (Multiple oci_fetch_all calls)", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\necho \"Test 1\\n\";\n$s = oci_parse($c, \"select * from dual\");\noci_execute($s);\noci_fetch_all($s, $rs, 0, -1, OCI_FETCHSTATEMENT_BY_ROW);\nvar_dump($rs);\noci_fetch_all($s, $rs1, 0, -1, OCI_FETCHSTATEMENT_BY_ROW);\nvar_dump($rs1);\necho \"Test 2\\n\";\n$s = oci_parse($c, \"select * from dual\");\noci_execute($s);\noci_fetch_all($s, $rs, 0, 1, OCI_FETCHSTATEMENT_BY_ROW);\nvar_dump($rs);\noci_fetch_all($s, $rs1, 0, 1, OCI_FETCHSTATEMENT_BY_ROW);\nvar_dump($rs1);\n?>")).toMatchSnapshot();
  });
});
