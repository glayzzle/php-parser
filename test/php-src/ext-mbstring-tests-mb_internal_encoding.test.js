// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_internal_encoding.phpt
  it("mb_internal_encoding()", function () {
    expect(parser.parseCode("<?php\n// TODO:\nini_set('include_path', __DIR__);\ninclude_once('common.inc');\n// EUC-JP\n$r = mb_internal_encoding('EUC-JP');\n($r === TRUE) ? print \"OK_EUC-JP_SET\\n\" : print \"NG_EUC-JP_SET\\n\";\n$enc = mb_internal_encoding();\nprint \"$enc\\n\";\n// UTF-8\n$r = mb_internal_encoding('UTF-8');\n($r === TRUE) ? print \"OK_UTF-8_SET\\n\" : print \"NG_UTF-8_SET\\n\";\n$enc = mb_internal_encoding();\nprint \"$enc\\n\";\n// ASCII\n$r = mb_internal_encoding('ASCII');\n($r === TRUE) ? print \"OK_ASCII_SET\\n\" : print \"NG_ASCII_SET\\n\";\n$enc = mb_internal_encoding();\nprint \"$enc\\n\";\n// Invalid Parameter\nprint \"== INVALID PARAMETER ==\\n\";\n// Note: Other than string type, PHP raises Warning\ntry {\n    $r = mb_internal_encoding('BAD_NAME');\n    print 'NG_BAD_SET' . \\PHP_EOL;\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n$enc = mb_internal_encoding();\nprint \"$enc\\n\";\n?>")).toMatchSnapshot();
  });
});
