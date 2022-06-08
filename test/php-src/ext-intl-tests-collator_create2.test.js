// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/collator_create2.phpt
  it("create() icu >= 4.8 && icu < 53.1", function () {
    expect(parser.parseCode("<?php\n/*\n * Try creating collator with different locales\n * with Procedural and Object methods.\n */\nfunction ut_main()\n{\n    $res_str = '';\n    $locales = array(\n        'EN-US-ODESSA',\n        'UK_UA_ODESSA',\n        'uk-ua_CALIFORNIA@currency=;currency=GRN',\n        '',\n        'root',\n        'uk@currency=EURO',\n    '12345678911131517192123252729313335373941434547495153575961636567697173757779818385878991939597991234567891113151719212325272931333537394143454749515357596163656769717375777981838587899193959799'\n    );\n    foreach( $locales as $locale )\n    {\n        // Create Collator with the current locale.\n        $coll = ut_coll_create( $locale );\n        if( !is_object($coll) )\n        {\n            $res_str .= \"Error creating collator with '$locale' locale: \" .\n                 intl_get_error_message() . \"\\n\";\n            continue;\n        }\n        // Get the requested, valid and actual locales.\n        $vloc = ut_coll_get_locale( $coll, Locale::VALID_LOCALE );\n        $aloc = ut_coll_get_locale( $coll, Locale::ACTUAL_LOCALE );\n        // Show them.\n        $res_str .= \"Locale: '$locale'\\n\" .\n            \"  ULOC_REQUESTED_LOCALE = '$locale'\\n\" .\n            \"  ULOC_VALID_LOCALE     = '$vloc'\\n\" .\n            \"  ULOC_ACTUAL_LOCALE    = '$aloc'\\n\";\n    }\n    return $res_str;\n}\ninclude_once( 'ut_common.inc' );\nut_run();\n?>")).toMatchSnapshot();
  });
});
