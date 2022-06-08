// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/msgfmt_format.phpt
  it("msgfmt_format()", function () {
    expect(parser.parseCode("<?php\n/*\n * Format a number using misc locales/patterns.\n */\nfunction ut_main()\n{\n    $locales = array(\n        'en_US' => \"{0,number,integer} monkeys on {1,number,integer} trees make {2,number} monkeys per tree\",\n        'ru_UA' => \"{0,number,integer} мавп на {1,number,integer} деревах це {2,number} мавпи на кожному деревi\",\n        'de' => \"{0,number,integer} Affen über {1,number,integer} Bäume um {2,number} Affen pro Baum\",\n        'en_UK' => \"{0,number,integer} monkeys on {1,number,integer} trees make {2,number} monkeys per tree\",\n    'root' => '{0,whatever} would not work!',\n    'fr' => \"C'est la vie!\",\n    );\n    $str_res = '';\n    $m = 4560;\n    $t = 123;\n    foreach( $locales as $locale => $pattern )\n    {\n        $str_res .= \"\\nLocale is: $locale\\n\";\n        $fmt = ut_msgfmt_create( $locale, $pattern );\n        if(!$fmt) {\n            $str_res .= dump(intl_get_error_message()).\"\\n\";\n            continue;\n        }\n        $str_res .= dump( ut_msgfmt_format( $fmt, array($m, $t, $m/$t) ) ) . \"\\n\";\n        $str_res .= dump( ut_msgfmt_format_message($locale, $pattern, array($m, $t, $m/$t))) . \"\\n\";\n    }\n    return $str_res;\n}\ninclude_once( 'ut_common.inc' );\n// Run the test\nut_run();\n?>")).toMatchSnapshot();
  });
});
