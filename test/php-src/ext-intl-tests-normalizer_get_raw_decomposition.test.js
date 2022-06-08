// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/normalizer_get_raw_decomposition.phpt
  it("normalizer_get_raw_decomposition()", function () {
    expect(parser.parseCode("<?php\n/*\n * Try getting raw decomposition mappings\n * with procedural and class methods.\n */\nfunction ut_main()\n{\n    $result = '';\n    $strings = [\n        \"a\",\n        \"\\u{FFDA}\",\n        \"\\u{FDFA}\",\n        \"\",\n        \"aa\",\n        \"\\xF5\",\n    ];\n    foreach ($strings as $string) {\n        $decomposition = ut_norm_get_raw_decomposition($string, Normalizer::FORM_KC);\n        $error_code = intl_get_error_code();\n        $error_message = intl_get_error_message();\n        $string_hex = bin2hex($string);\n        $result .= \"---------------------\\n\";\n        if ($decomposition === null) {\n            $result .= \"'$string_hex' has no decomposition mapping\\n\" ;\n        } else {\n            $result .= \"'$string_hex' has the decomposition mapping '\" . bin2hex($decomposition) . \"'\\n\" ;\n        }\n        $result .= \"error info: '$error_message' ($error_code)\\n\";\n    }\n    return $result;\n}\ninclude_once( 'ut_common.inc' );\nut_run();\n?>")).toMatchSnapshot();
  });
});
