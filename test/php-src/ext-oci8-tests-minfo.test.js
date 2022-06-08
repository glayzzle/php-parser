// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/minfo.phpt
  it("Code coverage for PHP_MINFO_FUNCTION(oci)", function () {
    expect(parser.parseCode("<?php\nob_start();\nphpinfo(INFO_MODULES);\n$v = ob_get_clean();\n$r = preg_match('/OCI8 Support .* enabled/', $v);\nif ($r !== 1)\n    var_dump($r);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
