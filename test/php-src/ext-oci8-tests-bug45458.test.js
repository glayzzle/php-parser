// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bug45458.phpt
  it("Bug #45458 (OCI8: Numeric keys for associative arrays are not handled properly)", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n// Run Test\necho \"Test 1\\n\";\n$stmt = 'select dummy \"A\", dummy \"20\" from dual';\n$s = oci_parse($c, $stmt);\noci_execute($s);\n$r = oci_fetch_all($s, $data, 0, -1, OCI_FETCHSTATEMENT_BY_ROW);\nvar_dump($data);\nvar_dump($data[0]);\nvar_dump($data[0][\"A\"]);\nvar_dump($data[0][\"20\"]);\noci_free_statement($s);\necho \"Test 2\\n\";\n$s = oci_parse($c, $stmt);\noci_execute($s);\n$r = oci_fetch_all($s, $data, 0, -1, OCI_ASSOC);\nvar_dump($data);\nvar_dump($data[\"A\"]);\nvar_dump($data[\"20\"]);\nvar_dump($data[\"A\"][0]);\nvar_dump($data[\"20\"][0]);\noci_free_statement($s);\noci_close($c);\n?>")).toMatchSnapshot();
  });
});
