// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_detect_order.phpt
  it("mb_detect_order()", function () {
    expect(parser.parseCode("<?php\n//$debug = true;\nini_set('include_path', __DIR__);\ninclude_once('common.inc');\n// Set order to \"auto\"\n$r = mb_detect_order('auto');\n($r === TRUE) ? print \"OK_AUTO\\n\" : print \"NG_AUTO\\n\";\nprint implode(', ', mb_detect_order()) . \"\\n\";\n// Set order by string\n$r = mb_detect_order('SJIS,EUC-JP,JIS,UTF-8');\n($r === TRUE) ? print \"OK_STR\\n\" : print \"NG_STR\\n\";\nprint implode(', ', mb_detect_order()) . \"\\n\";\n// Set order by array\n$a[] = 'ASCII';\n$a[] = 'JIS';\n$a[] = 'EUC-JP';\n$a[] = 'UTF-8';\n$r = mb_detect_order($a);\n($r === TRUE) ? print \"OK_ARRAY\\n\" : print \"NG_ARRAY\\n\";\nprint implode(', ', mb_detect_order()) . \"\\n\";\n// Set invalid encoding. Should fail.\nprint \"== INVALID PARAMETER ==\\n\";\ntry {\n    var_dump(mb_detect_order('BAD_NAME'));\n} catch (\\ValueError $e) {\n     echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(mb_detect_order());\n$a[] = 'BAD_NAME';\ntry {\n    var_dump(mb_detect_order($a));\n} catch (\\ValueError $e) {\n     echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(mb_detect_order());\n?>")).toMatchSnapshot();
  });
});
