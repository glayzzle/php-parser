// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_start_basic_unerasable_002.phpt
  it("ob_start(): Ensure unerasable buffer cannot be erased by ob_clean(), ob_end_clean() or ob_end_flush().", function () {
    expect(parser.parseCode("<?php\nfunction callback($string) {\n    static $callback_invocations;\n    $callback_invocations++;\n    return \"[callback:$callback_invocations]$string\\n\";\n}\nob_start('callback', 0, false);\necho \"All of the following calls will fail to clean/remove the topmost buffer:\\n\";\nvar_dump(ob_clean());\nvar_dump(ob_end_clean());\nvar_dump(ob_end_flush());\necho \"The OB nesting will still be 1 level deep:\\n\";\nvar_dump(ob_get_level());\n?>")).toMatchSnapshot();
  });
});
