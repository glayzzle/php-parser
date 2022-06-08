// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_http_output.phpt
  it("mb_http_output()", function () {
    expect(parser.parseCode("<?php\n//TODO: Add more encoding. Wrong parameter type test.\nini_set('include_path', __DIR__);\ninclude_once('common.inc');\n// Set HTTP output encoding to ASCII\n$r = mb_http_output('ASCII');\n($r === TRUE) ? print \"OK_ASCII_SET\\n\" : print \"NG_ASCII_SET\\n\";\n$enc = mb_http_output();\nprint \"$enc\\n\";\n// Set HTTP output encoding to SJIS\n$r = mb_http_output('SJIS');\n($r === TRUE) ? print \"OK_SJIS_SET\\n\" : print \"NG_SJIS_SET\\n\";\n$enc = mb_http_output();\nprint \"$enc\\n\";\n// Set HTTP output encoding to JIS\n$r = mb_http_output('JIS');\n($r === TRUE) ? print \"OK_JIS_SET\\n\" : print \"NG_JIS_SET\\n\";\n$enc = mb_http_output();\nprint \"$enc\\n\";\n// Set HTTP output encoding to UTF8\n$r = mb_http_output('UTF-8');\n($r === TRUE) ? print \"OK_UTF-8_SET\\n\" : print \"NG_UTF-8_SET\\n\";\n$enc = mb_http_output();\nprint \"$enc\\n\";\n// Set HTTP output encoding to EUC-JP\n$r = mb_http_output('EUC-JP');\n($r === TRUE) ? print \"OK_EUC-JP_SET\\n\" : print \"NG_EUC-JP_SET\\n\";\n$enc = mb_http_output();\nprint \"$enc\\n\";\n// Invalid parameters\nprint \"== INVALID PARAMETER ==\\n\";\n// Note: Bad string raise ValueError. Bad Type raise Notice (Type Conversion) and ValueError\ntry {\n    $r = mb_http_output('BAD_NAME');\n    print 'NG_BAD_SET' . \\PHP_EOL;\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n$enc = mb_http_output();\nprint \"$enc\\n\";\n?>")).toMatchSnapshot();
  });
});
