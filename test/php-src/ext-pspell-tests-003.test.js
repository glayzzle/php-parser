// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pspell/tests/003.phpt
  it("pspell_config_ignore", function () {
    expect(parser.parseCode("<?php\n$cfg = pspell_config_create('en', 'british', '', 'iso8859-1');\n$cfg2 = pspell_config_create('en', 'british', '', 'b0rked');\n$p = pspell_new_config($cfg);\nvar_dump(pspell_check($p, 'yy'));\n$p2 = pspell_new_config($cfg2);\ntry {\n    pspell_check($p2, 'yy');\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho \"---\\n\";\nvar_dump(pspell_config_ignore($cfg, 2));\n$p = pspell_new_config($cfg);\nvar_dump(pspell_check($p, 'yy'));\n// segfault it?\nvar_dump(pspell_config_ignore($cfg, PHP_INT_MAX));\n?>")).toMatchSnapshot();
  });
});
