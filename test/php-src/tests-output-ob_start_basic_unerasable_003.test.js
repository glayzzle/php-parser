// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_start_basic_unerasable_003.phpt
  it("ob_start(): Ensure unerasable buffer cannot be accessed or erased by ob_get_clean().", function () {
    expect(parser.parseCode("<?php\nfunction callback($string) {\n    static $callback_invocations;\n    $callback_invocations++;\n    return \"[callback:$callback_invocations]$string\\n\";\n}\nob_start('callback', 0, false);\necho \"This call will obtain the content, but will not clean the buffer.\";\n$str = ob_get_clean();\nvar_dump($str);\n?>")).toMatchSnapshot();
  });
});
