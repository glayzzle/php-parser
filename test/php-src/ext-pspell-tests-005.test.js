// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pspell/tests/005.phpt
  it("pspell configs", function () {
    expect(parser.parseCode("<?php\n$wordlist = __DIR__.'/wordlist.txt';\nvar_dump(pspell_new_personal(__FILE__, 'en'));\n$p = pspell_new_personal($wordlist, 'en');\nvar_dump(pspell_check($p, 'dfnvnsafksfksf'));\necho \"--\\n\";\n$cfg = pspell_config_create('en');\nvar_dump(pspell_config_personal($cfg, \"$wordlist.tmp\"));\n$p = pspell_new_config($cfg);\ncopy($wordlist, \"$wordlist.tmp\");\nvar_dump(pspell_check($p, 'ola'));\nvar_dump(pspell_add_to_personal($p, 'ola'));\nvar_dump(pspell_check($p, 'ola'));\necho \"--\\n\";\nvar_dump(pspell_save_wordlist($p));\nvar_dump(strpos(file_get_contents(\"$wordlist.tmp\"), 'ola') !== FALSE);\nunlink(\"$wordlist.tmp\");\n?>")).toMatchSnapshot();
  });
});
