// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/locale_lookup_variant2.phpt
  it("locale_lookup.phpt()", function () {
    expect(parser.parseCode("<?php\n/*\n * Try parsing different Locales\n * with Procedural and Object methods.\n */\nfunction ut_main()\n{\n    $loc_ranges = array(\n        'de-de',\n        'sl_IT',\n        'sl_IT_Nedis',\n        'jbo',\n        'art-lojban'\n    );\n    $lang_tags = array(\n        'de-DEVA',\n        'de-DE-1996',\n        'de-DE',\n        'zh_Hans',\n        'de-CH-1996',\n        'sl_IT',\n        'sl_IT_nedis-a-kirti-x-xyz',\n        'sl_IT_rozaj',\n        'sl_IT_NEDIS_ROJAZ_1901',\n        'i-enochian',\n        'sgn-CH-de',\n        'art-lojban',\n        'i-lux',\n        'art-lojban',\n        'jbo',\n        'en_sl_IT',\n        'zh-Hant-CN-x-prv1-prv2'\n    );\n    $res_str = '';\n    $isCanonical = false;\n    foreach($loc_ranges as $loc_range){\n            $res_str .=\"--------------\\n\";\n            $result= ut_loc_locale_lookup( $lang_tags , $loc_range,$isCanonical,\"en_US\");\n            $comma_arr =implode(\",\",$lang_tags);\n            $res_str .= \"loc_range:$loc_range \\nlang_tags: $comma_arr\\n\";\n            $res_str .= \"\\nlookup result:$result\\n\";\n//canonicalized version\n            $result= ut_loc_locale_lookup( $lang_tags , $loc_range,!($isCanonical),\"en_US\");\n            $can_loc_range = ut_loc_canonicalize($loc_range);\n            $res_str .= \"Canonical lookup result:$result\\n\";\n    }\n    $res_str .= \"\\n\";\n    return $res_str;\n}\ninclude_once( 'ut_common.inc' );\nut_run();\n?>")).toMatchSnapshot();
  });
});
