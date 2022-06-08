// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/formatter_format_currency2.phpt
  it("numfmt_format_currency() icu >= 4.8", function () {
    expect(parser.parseCode("<?php\n/*\n * Format a number using misc currencies/locales.\n */\n/*\n * TODO: doesn't pass on ICU 3.6 because 'ru' and 'uk' locales changed\n * currency formatting.\n */\nfunction ut_main()\n{\n    $locales = array(\n        'en_UK' => 'GBP',\n        'en_US' => 'USD',\n        'ru'    => 'RUR',\n        'uk'    => 'UAH',\n        'en'    => 'UAH'\n    );\n    $res_str = '';\n    $number = 1234567.89;\n    foreach( $locales as $locale => $currency )\n    {\n        $fmt = ut_nfmt_create( $locale, NumberFormatter::CURRENCY );\n        $res_str .= \"$locale: \" . var_export( ut_nfmt_format_currency( $fmt, $number, $currency ), true ) . \"\\n\";\n    }\n    return $res_str;\n}\ninclude_once( 'ut_common.inc' );\n// Run the test\nut_run();\n?>")).toMatchSnapshot();
  });
});
