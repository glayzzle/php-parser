// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/check_win_config.phpt
  it("Check libcurl config on windows", function () {
    expect(parser.parseCode("<?php\n    ob_start();\n    phpinfo();\n    $s = ob_get_contents();\n    ob_end_clean();\n    preg_match('/curl\\n\\n(.+)\\n\\n/siU', $s, $m);\n    echo $m[1], \"\\n\";\n?>\nDONE")).toMatchSnapshot();
  });
});
