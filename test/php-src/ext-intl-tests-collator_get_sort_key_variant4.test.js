// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/collator_get_sort_key_variant4.phpt
  it("collator_get_sort_key() icu >= 54.1", function () {
    expect(parser.parseCode("<?php\n/*\n * Get sort keys using various locales\n */\nfunction sort_arrays( $locale, $data )\n{\n    $res_str = '';\n    $coll = ut_coll_create( $locale );\n    foreach($data as $value) {\n        $res_val = ut_coll_get_sort_key( $coll, $value );\n        $res_str .= \"source: \".$value.\"\\n\".\n                    \"key: \".bin2hex($res_val).\"\\n\";\n    }\n    return $res_str;\n}\nfunction ut_main()\n{\n    $res_str = '';\n    // Regular strings keys\n    $test_params = array(\n        'abc', 'abd', 'aaa',\n        'аа', 'а', 'z',\n        '', '3',\n        'y'  , 'i'  , 'k'\n    );\n    $res_str .= sort_arrays( 'en_US', $test_params );\n    // Sort a non-ASCII array using ru_RU locale.\n    $test_params = array(\n        'абг', 'абв', 'жжж', 'эюя'\n    );\n    $res_str .= sort_arrays( 'ru_RU', $test_params );\n    // Sort an array using Lithuanian locale.\n    $res_str .= sort_arrays( 'lt_LT', $test_params );\n    return $res_str . \"\\n\";\n}\ninclude_once( 'ut_common.inc' );\nut_run();\n?>")).toMatchSnapshot();
  });
});
