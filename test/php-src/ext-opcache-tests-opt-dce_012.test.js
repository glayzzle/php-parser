// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/dce_012.phpt
  it("Incorrect DCE of constructor DO_FCALL", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n\t$a = null;\n    for ($i = 0; $i < 10; $i++) {\n        $obj = $a = $a;\n        $obj = new stdClass;\n        $obj->orop1 = 'abc';\n    }\n    foreach (range(0, 6) as $levels) {\n        print \"$levels level\" . ($levels == C ? \"\" : \"s\") . \"aaa\";\n    }\n    $obj->prop1 = null;\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
