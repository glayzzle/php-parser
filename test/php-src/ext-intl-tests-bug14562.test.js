// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug14562.phpt
  it("Bug #14562 NumberFormatter breaks when locale changes", function () {
    expect(parser.parseCode("<?php\nfunction ut_main()\n{\n    $res_str = \"\";\n    $de_locale=\"de_DE.UTF-8\";\n    $fmt = new NumberFormatter(\"de\", NumberFormatter::DECIMAL );\n    $numeric = $fmt->parse(\"1234,56\");\n    $res_str .= \"$numeric\\n\";\n    setlocale(LC_ALL, $de_locale);\n    $fmt = new NumberFormatter(\"de\", NumberFormatter::DECIMAL );\n    $numeric = $fmt->parse(\"1234,56\");\n    setlocale(LC_ALL, \"C\"); // reset for printing\n    $res_str .= \"$numeric\\n\";\n        return $res_str;\n}\ninclude_once( 'ut_common.inc' );\nut_run();\n?>")).toMatchSnapshot();
  });
});
