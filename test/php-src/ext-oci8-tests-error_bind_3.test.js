// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/error_bind_3.phpt
  it("Test some more oci_bind_by_name error conditions", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n$sql = \"begin\n        :output1 := 99;\n        :output2 := 'abc';\n       end;\";\n$s = oci_parse($c, $sql);\noci_bind_by_name($s, ':output1', $output1, -1, OCI_B_BOL);\noci_bind_by_name($s, ':output2', $output2, -1, OCI_B_BOL);\noci_execute($s);\nvar_dump($output1);\nvar_dump($output2);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
