// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_start_basic_unerasable_001.phpt
  it("ob_start(): Ensure content of unerasable buffer can be accessed by ob_get_contents().", function () {
    expect(parser.parseCode("<?php\nfunction callback($string) {\n    static $callback_invocations;\n    $callback_invocations++;\n    return \"[callback:$callback_invocations]$string\\n\";\n}\nob_start('callback', 0, false);\necho \"This call will obtain the content:\\n\";\n$str = ob_get_contents();\nvar_dump($str);\n?>")).toMatchSnapshot();
  });
});
