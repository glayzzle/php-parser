// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/bug54089.phpt
  it("Bug #54089 (token_get_all() does not stop after __halt_compiler)", function () {
    expect(parser.parseCode("<?php\n$codes = array(\n    \"<?php __halt_compiler\",\n    \"<?php __halt_compiler(\",\n    \"<?php __halt_compiler();\",\n    \"<?php __halt_compiler();ABC\",\n    \"<?php __halt_compiler\\n(\\n)\\n;ABC\",\n    \"<?php __halt_compiler\\nabc\\ndef\\nghi ABC\",\n);\nforeach ($codes as $code) {\n    $tokens = token_get_all($code);\n    var_dump($tokens);\n    $code = '';\n    foreach ($tokens as $t)\n    {\n        $code .= isset($t[1]) ? $t[1] : $t;\n    }\n    var_dump($code);\n}\n?>")).toMatchSnapshot();
  });
});
