// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_output_handler_euc_jp.phpt
  it("mb_output_handler() (EUC-JP)", function () {
    expect(parser.parseCode("<?php\n// TODO: Do real test\n// EUC-JP\n$euc_jp = \"�ƥ��������ܸ�ʸ���󡣤��Υ⥸�塼���PHP�˥ޥ���Х��ȴؿ����󶡤��ޤ���\";\nmb_http_output('EUC-JP') or print(\"mb_http_output() failed\\n\");\nob_start('mb_output_handler');\necho $euc_jp;\n$output = ob_get_clean();\nvar_dump( $output );\n?>")).toMatchSnapshot();
  });
});
