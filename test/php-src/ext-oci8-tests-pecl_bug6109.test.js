// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/pecl_bug6109.phpt
  it("PECL Bug #6109 (Error messages not kept)", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n// Run Test\necho \"Test 1\\n\";\n$s = oci_parse($c, 'delete from table_does_not_exist');\n$r = @oci_execute($s);\nif ($r) {\n    echo \"whoops - table does exist\\n\";\n} else {\n    for ($i = 0; $i < 5; $i++) {\n        $err = oci_error($s);\n        echo ($i) .' -> '.$err['message'] .\"\\n\";\n    }\n}\n// Cleanup\noci_close($c);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
