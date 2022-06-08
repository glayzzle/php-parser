// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/simpletest.phpt
  it("Simple multi-byte print test (EUC-JP)", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic PHP functions to check if it works with multi-byte chars\n */\n// EUC-JP strings\n$s1 = \"�ޥ���Х��ȴؿ����Ȥ��ޤ���\";\n$s2 = \"����ʸ����Ϣ�뤵��Ƥ���Ϥ���\";\n// print directly\necho \"echo: \".$s1.$s2.\"\\n\";\nprint(\"print: \".$s1.$s2.\"\\n\");\nprintf(\"printf: %s%s\\n\",$s1, $s2);\necho sprintf(\"sprintf: %s%s\\n\",$s1, $s2);\n// Assign to var\n$s3 = $s1.$s2.\"\\n\";\necho \"echo: \".$s3;\n?>")).toMatchSnapshot();
  });
});
