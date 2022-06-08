// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/007.phpt
  it("preg_replace_callback() with callback that modifies subject string", function () {
    expect(parser.parseCode("<?php\nfunction evil($x) {\n    global $txt;\n    $txt[3] = \"\\xFF\";\n    var_dump($x);\n    return $x[0];\n}\n$txt = \"ola123\";\nvar_dump(preg_replace_callback('#.#u', 'evil', $txt));\nvar_dump($txt);\nvar_dump(preg_last_error() == PREG_NO_ERROR);\nvar_dump(preg_replace_callback('#.#u', 'evil', $txt));\nvar_dump(preg_last_error() == PREG_BAD_UTF8_ERROR);\necho \"Done!\\n\";\n?>")).toMatchSnapshot();
  });
});
