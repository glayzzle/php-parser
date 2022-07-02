// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug65769.phpt
  it("Bug #65769 localeconv() broken in TS builds", function () {
    expect(parser.parseCode("<?php\n$locales = array('sve', 'french', 'us', 'ru', 'czech', 'serbian');\nforeach ($locales as $locale) {\n    $locale = setlocale(LC_ALL, $locale);\n    $lconv = localeconv();\n    var_dump(\n        $locale,\n        $lconv['decimal_point'],\n        $lconv['thousands_sep'],\n        $lconv['int_curr_symbol'],\n        $lconv['currency_symbol'],\n        $lconv['mon_decimal_point'],\n        $lconv['mon_thousands_sep']\n    );\n    if ($locale === 'Swedish_Sweden.1252') {\n        var_dump(in_array($lconv['mon_thousands_sep'], ['.', '�']));\n    }\n    echo '++++++++++++++++++++++', \"\\n\";\n}\n?>\n+++DONE+++")).toMatchSnapshot();
  });
});
