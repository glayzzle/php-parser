// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_strstr.phpt
  it("mb_strstr()", function () {
    expect(parser.parseCode("<?php\nfunction EUC_JP($utf8str) {\n    return mb_convert_encoding($utf8str, \"EUC-JP\", \"UTF-8\");\n}\nfunction FROM_EUC_JP($eucjpstr) {\n    return mb_convert_encoding($eucjpstr, \"UTF-8\", \"EUC-JP\");\n}\nvar_dump(mb_strstr(\"あいうえおかきくけこ\", \"おかき\"));\nvar_dump(mb_strstr(\"あいうえおかきくけこ\", \"おかき\", false));\nvar_dump(mb_strstr(\"あいうえおかきくけこ\", \"おかき\", true));\nvar_dump(FROM_EUC_JP(mb_strstr(EUC_JP(\"あいうえおかきくけこ\"), EUC_JP(\"おかき\"), false, \"EUC-JP\")));\nvar_dump(FROM_EUC_JP(mb_strstr(EUC_JP(\"あいうえおかきくけこ\"), EUC_JP(\"おかき\"), true, \"EUC-JP\")));\nmb_internal_encoding(\"EUC-JP\");\nvar_dump(FROM_EUC_JP(mb_strstr(EUC_JP(\"あいうえおかきくけこ\"), EUC_JP(\"おかき\"))));\nvar_dump(FROM_EUC_JP(mb_strstr(EUC_JP(\"あいうえおかきくけこ\"), EUC_JP(\"おかき\"), false)));\nvar_dump(FROM_EUC_JP(mb_strstr(EUC_JP(\"あいうえおかきくけこ\"), EUC_JP(\"おかき\"), true)));\n?>")).toMatchSnapshot();
  });
});
