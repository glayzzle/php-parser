// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/translit-failure.phpt
  it("Translit failure", function () {
    expect(parser.parseCode("<?php\n// Should be ok.\n// Content from file is from libiconv testkit. Tested both\n// with a string as an implode, no difference.\n// if at some point internal encoding changes, set correct one\n// in INI section or use file 'TranslitFail1.ISO-8859-1'.\nset_time_limit(5);\n/*\n * The bug (fixed in libiconv 1.8) was confirmed that iconv goes into an\n * infinite loop when ASCII//TRANSLIT is performed. We should stop it in\n * some time.\n */\n$test = '�crit par %s.';\nvar_dump(iconv(\"ISO-8859-1\", \"ASCII//TRANSLIT\", $test));\n?>")).toMatchSnapshot();
  });
});
