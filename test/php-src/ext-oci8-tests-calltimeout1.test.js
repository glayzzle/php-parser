// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/calltimeout1.phpt
  it("oci_set_call_timeout: test timing out ", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\nfunction mysleep($c, $t)\n{\n    $s = @oci_parse($c, \"begin dbms_lock.sleep(:t); end;\");\n    if (!$s) {\n        $m = oci_error($c);\n        echo \"Execute error was \", $m['message'], \"\\n\";\n        return;\n    }\n    @oci_bind_by_name($s, \":t\", $t);\n    $r = @oci_execute($s);\n    if ($r) {\n        echo \"Execute succeeded\\n\";\n    } else {\n        $m = oci_error($s);\n        echo \"Execute error was \", $m['message'], \"\\n\";\n    }\n}\necho \"Test 1\\n\";\noci_set_call_timeout($c, 4000);  // milliseconds\n$r = mysleep($c, 8);             // seconds\n?>")).toMatchSnapshot();
  });
});
