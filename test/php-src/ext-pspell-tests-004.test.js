// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pspell/tests/004.phpt
  it("pspell configs", function () {
    expect(parser.parseCode("<?php\n$cfg = pspell_config_create('en', 'british', '', 'iso8859-1');\nvar_dump(pspell_config_mode($cfg, PSPELL_BAD_SPELLERS));\nvar_dump(pspell_config_runtogether($cfg, false));\n$p = pspell_new_config($cfg);\nvar_dump(pspell_check($p, 'theoasis'));\necho \"---\\n\";\n// now it should pass\nvar_dump(pspell_config_runtogether($cfg, true));\n$p = pspell_new_config($cfg);\nvar_dump(pspell_check($p, 'theoasis'));\n?>")).toMatchSnapshot();
  });
});
