// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/resourcebundle_locales.phpt
  it("Test ResourceBundle::getLocales", function () {
    expect(parser.parseCode("<?php\ninclude \"resourcebundle.inc\";\nfunction ut_main() {\n    $str_res = '';\n    $str_res .= join(\"\\n\", ut_resourcebundle_locales(BUNDLE));\n    return $str_res;\n}\n    include_once( 'ut_common.inc' );\n    ut_run();\n?>")).toMatchSnapshot();
  });
});
