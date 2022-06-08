// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/fe_fetch_dce.phpt
  it("Incorrect DCE with FE_FETCH", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $a = [\"3\"];\n    $x = 1;\n    foreach ($a as $x) {\n        $x = 2.0;\n    }\n    var_dump($x);\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
