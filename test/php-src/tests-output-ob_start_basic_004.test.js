// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_start_basic_004.phpt
  it("ob_start() chunk_size: confirm buffer is flushed after any output call that causes its length to equal or exceed chunk_size.", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in main/output.c\n*/\n// In HEAD, $chunk_size value of 1 should not have any special behaviour (http://marc.info/?l=php-internals&m=123476465621346&w=2).\nfunction callback($string) {\n    global $callback_invocations;\n    $callback_invocations++;\n    $len = strlen($string);\n    return \"f[call:$callback_invocations; len:$len]$string\\n\";\n}\nfor ($cs=-1; $cs<10; $cs++) {\n  echo \"\\n----( chunk_size: $cs, output append size: 1 )----\\n\";\n  $callback_invocations=0;\n  ob_start('callback', $cs);\n  echo '1'; echo '2'; echo '3'; echo '4'; echo '5'; echo '6'; echo '7'; echo '8';\n  ob_end_flush();\n}\nfor ($cs=-1; $cs<10; $cs++) {\n  echo \"\\n----( chunk_size: $cs, output append size: 4 )----\\n\";\n  $callback_invocations=0;\n  ob_start('callback', $cs);\n  echo '1234'; echo '5678';\n  ob_end_flush();\n}\n?>")).toMatchSnapshot();
  });
});
