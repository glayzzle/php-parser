// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ctype/tests/001.phpt
  it("ctype on integers", function () {
    expect(parser.parseCode("<?php\nsetlocale(LC_ALL,\"C\");\nfunction ctype_test_001($function) {\n    $n=0;\n    for($a=0;$a<256;$a++) {\n        if($function($a)) $n++;\n    }\n    echo \"$function $n\\n\";\n}\nctype_test_001(\"ctype_lower\");\nctype_test_001(\"ctype_upper\");\nctype_test_001(\"ctype_alpha\");\nctype_test_001(\"ctype_digit\");\nctype_test_001(\"ctype_alnum\");\nctype_test_001(\"ctype_cntrl\");\nctype_test_001(\"ctype_graph\");\nctype_test_001(\"ctype_print\");\nctype_test_001(\"ctype_punct\");\nctype_test_001(\"ctype_space\");\nctype_test_001(\"ctype_xdigit\");\n?>")).toMatchSnapshot();
  });
});
