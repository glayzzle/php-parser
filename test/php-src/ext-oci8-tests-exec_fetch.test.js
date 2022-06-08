// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/exec_fetch.phpt
  it("fetch after failed oci_execute()", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/connect.inc';\n$sql = \"select 2 from nonex_dual\";\n$stmt = oci_parse($c, $sql);\nvar_dump(oci_execute($stmt));\nvar_dump(oci_fetch_array($stmt));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
