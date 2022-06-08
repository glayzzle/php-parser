// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug12887.phpt
  it("locale_get_keywords() bug #12887", function () {
    expect(parser.parseCode("<?php\nfunction ut_main()\n{\n    $res_str = '';\n    $keywords_arr = ut_loc_get_keywords( 'de_DE@currency=EUR;collation=PHONEBOOK;sort=PHONEBOOK' );\n    if ($keywords_arr) {\n        foreach( $keywords_arr as $key => $value){\n            $res_str .= \"$key = $value\\n\";\n        }\n    }\n    $res_str .= \"\\n\";\n    return $res_str;\n}\ninclude_once( 'ut_common.inc' );\nut_run();\n?>")).toMatchSnapshot();
  });
});
