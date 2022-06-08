// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug37800.phpt
  it("Bug #37800 (preg_replace() limit parameter odd behaviour)", function () {
    expect(parser.parseCode("<?php\n$s_string = '1111111111';\n$s_search = '/1/';\n$s_replace = 'One ';\n$i_limit = 1;\n$i_count = 0;\n$s_output = preg_replace($s_search, $s_replace, $s_string, $i_limit,\n$i_count);\necho \"Output = \" . var_export($s_output, True) . \"\\n\";\necho \"Count  = $i_count\\n\";\nvar_dump(preg_last_error() === PREG_NO_ERROR);\n$i_limit = strlen($s_string);\n$s_output = preg_replace($s_search, $s_replace, $s_string, $i_limit,\n$i_count);\necho \"Output = \" . var_export($s_output, True) . \"\\n\";\necho \"Count  = $i_count\\n\";\nvar_dump(preg_last_error() === PREG_NO_ERROR);\n?>")).toMatchSnapshot();
  });
});
