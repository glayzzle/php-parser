// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/locale_accept.phpt
  it("locale_accept_from_http", function () {
    expect(parser.parseCode("<?php\n/*\n * Try parsing different Locales\n * with Procedural and Object methods.\n */\nfunction ut_main()\n{\n    $res_str = \"\";\n    $http_acc = array(\n        'en-us,en;q=0.5',\n        'da, en-gb;q=0.8, en;q=0.7',\n        'zh, en-us;q=0.8, en;q=0.7',\n        'xx, fr-FR;q=0.3, de-DE;q=0.5',\n        'none',\n    );\n     foreach($http_acc as $http) {\n        $res = ut_loc_accept_http($http);\n        $res_str .= @\"Accepting $http: $res\\n\";\n    }\n    return $res_str;\n}\ninclude_once( 'ut_common.inc' );\nut_run();\n?>")).toMatchSnapshot();
  });
});
