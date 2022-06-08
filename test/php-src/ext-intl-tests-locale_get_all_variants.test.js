// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/locale_get_all_variants.phpt
  it("locale_get_all_variants.phpt()", function () {
    expect(parser.parseCode("<?php\n/*\n * Try parsing different Locales\n * with Procedural and Object methods.\n */\nfunction ut_main()\n{\n    $locales  = array(\n        'sl_IT_nedis_KIRTI',\n        'sl_IT_nedis-a-kirti-x-xyz',\n        'sl_IT_rozaj',\n        'sl_IT_NEDIS_ROJAZ_1901',\n        'i-enochian',\n        'zh-hakka',\n        'zh-wuu',\n        'i-tay',\n        'sgn-BE-nl',\n        'sgn-CH-de',\n        'sl_IT_rozaj@currency=EUR'\n    );\n    $res_str = '';\n    foreach($locales as $locale){\n        $variants_arr = ut_loc_locale_get_all_variants( $locale);\n        $res_str .= \"$locale : variants \";\n        if( $variants_arr){\n            foreach($variants_arr as $variant){\n                $res_str .= \"'$variant',\";\n            }\n        }else{\n            $res_str .= \"--none\";\n        }\n        $res_str .= \"\\n\";\n    }\n    $res_str .= \"\\n\";\n    return $res_str;\n}\ninclude_once( 'ut_common.inc' );\nut_run();\n?>")).toMatchSnapshot();
  });
});
