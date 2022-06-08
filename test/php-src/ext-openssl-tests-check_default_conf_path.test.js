// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/check_default_conf_path.phpt
  it("Check for default OpenSSL config path on Windows", function () {
    expect(parser.parseCode("<?php\nob_start();\nphpinfo();\n$info = ob_get_contents();\nob_end_clean();\npreg_match(\",Openssl default config [^ ]* (.*),\", $info, $m);\nif (isset($m[1])) {\n    var_dump(str_replace('/', '\\\\', strtolower($m[1])));\n} else {\n    echo $info;\n}\n?>")).toMatchSnapshot();
  });
});
