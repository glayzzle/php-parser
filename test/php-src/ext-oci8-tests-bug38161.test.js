// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bug38161.phpt
  it("Bug #38161 (oci_bind_by_name() returns garbage when Oracle didn't set the variable)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/connect.inc';\n$query = \"begin if false then :bv := 1; end if; end;\";\n$stid = oci_parse($c, $query);\noci_bind_by_name($stid, \":bv\", $bv, 22);\noci_execute($stid, OCI_DEFAULT);\nvar_dump($bv);\nunset($bv);\n$query = \"begin if false then :bv := 1; end if; end;\";\n$stid = oci_parse($c, $query);\noci_bind_by_name($stid, \":bv\", $bv, 22, SQLT_INT);\noci_execute($stid, OCI_DEFAULT);\nvar_dump($bv);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
