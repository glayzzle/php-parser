// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ctype/tests/002.phpt
  it("ctype on strings", function () {
    expect(parser.parseCode("<?php\nsetlocale(LC_ALL,\"C\");\nprint \"LOCALE is '\" . setlocale(LC_ALL,0) . \"'\\n\";\nfunction ctype_test_002($function) {\n    $n1 = $n2 = $n3 = 0;\n    // test portable POSIX characters 0..127\n    for ($a=0;$a<128;$a++) {\n        $c = chr($a);\n        if($function($c)) $n1++;\n        if($function(\"$c$c$c\")) $n2++;\n        if($function(\"1-$c$c$c-x\")) $n3++;\n    }\n    print \"$function $n1 $n2 $n3\\n\";\n}\nctype_test_002(\"ctype_lower\");\nctype_test_002(\"ctype_upper\");\nctype_test_002(\"ctype_alpha\");\nctype_test_002(\"ctype_digit\");\nctype_test_002(\"ctype_alnum\");\nctype_test_002(\"ctype_cntrl\");\nctype_test_002(\"ctype_graph\");\nctype_test_002(\"ctype_print\");\nctype_test_002(\"ctype_punct\");\nctype_test_002(\"ctype_space\");\nctype_test_002(\"ctype_xdigit\");\n?>")).toMatchSnapshot();
  });
});
