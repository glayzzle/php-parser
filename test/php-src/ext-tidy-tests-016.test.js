// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/016.phpt
  it("Passing configuration file through tidy_parse_file() (may fail with buggy libtidy)", function () {
    expect(parser.parseCode("<?php\n        $tidy = tidy_parse_file(__DIR__.\"/016.html\",\n                                __DIR__.\"/016.tcfg\");\n        $cfg = $tidy->getConfig();\n        echo $cfg[\"clean\"];\n?>")).toMatchSnapshot();
  });
});
