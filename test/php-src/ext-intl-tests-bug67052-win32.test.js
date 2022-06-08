// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug67052-win32.phpt
  it("Bug #67052 - NumberFormatter::parse() resets LC_NUMERIC setting", function () {
    expect(parser.parseCode("<?php\nfunction ut_main()\n{\n        setlocale(LC_ALL, 'de-de');\n        $fmt = new NumberFormatter( 'sl_SI.UTF-8', NumberFormatter::DECIMAL);\n        $num = \"1.234.567,891\";\n        $res_str =  $fmt->parse($num).\"\\n\";\n        $res_str .=  setlocale(LC_NUMERIC, 0);\n        return $res_str;\n}\ninclude_once( 'ut_common.inc' );\nut_run();\n?>")).toMatchSnapshot();
  });
});
