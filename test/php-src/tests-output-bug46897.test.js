// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/bug46897.phpt
  it("Bug #46897: ob_flush() should fail to flush unerasable buffers", function () {
    expect(parser.parseCode("<?php\nfunction callback($string) {\n    static $callback_invocations;\n    $callback_invocations++;\n    return \"[callback:$callback_invocations]$string\\n\";\n}\nob_start('callback', 0, false);\necho \"Attempt to flush unerasable buffer - should fail...\";\nvar_dump(ob_flush());\n// Check content of buffer after flush - if flush failed it should still contain the string above.\nvar_dump(ob_get_contents());\necho 'Done';\n?>")).toMatchSnapshot();
  });
});
