// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pspell/tests/002.phpt
  it("pspell session", function () {
    expect(parser.parseCode("<?php\n$p = pspell_new('en');\nvar_dump(pspell_check($p, 'somebogusword'));\nvar_dump(pspell_add_to_session($p, ''));\nvar_dump(pspell_add_to_session($p, 'somebogusword'));\nvar_dump(pspell_check($p, 'somebogusword'));\n$res = @pspell_clear_session($p);\nif ($res) {\n    var_dump($res);\n    var_dump(pspell_check($p, 'somebogusword'));\n} else {\n    echo \"bool(true)\\n\";\n    echo \"bool(false)\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
