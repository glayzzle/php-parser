// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bug51291_2.phpt
  it("Bug #51291 (oci_error() doesn't report last error when called two times)", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\necho \"\\nTest 1 - Execute - after successful 2nd query with same statement\\n\";\n$s = oci_parse($c, \"declare e exception; begin if :bv = 1 then raise e; end if; end;\");\n$bv = 1;\noci_bind_by_name($s, \":bv\", $bv);\n$r = @oci_execute($s, OCI_DEFAULT);\nif (!$r) {\n    var_dump(oci_error(), oci_error($c), oci_error($s));\n    $bv = 0;\n    $r = oci_execute($s, OCI_DEFAULT);\n    echo \"Execute status is \";\n    if (is_null($r)) echo \"null\";\n    else if ($r === false) echo \"false\";\n    else if ($r === true) echo \"true\";\n    else echo $r;\n    echo \"\\n\";\n    echo \"2nd call after successful execute\\n\";\n    var_dump(oci_error(), oci_error($c), oci_error($s));\n}\n?>")).toMatchSnapshot();
  });
});
