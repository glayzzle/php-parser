// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/isset_basic1.phpt
  it("Test isset() function : basic functionality", function () {
    expect(parser.parseCode("<?php\nclass foo {}\necho \"*** Testing isset() : basic functionality ***\\n\";\n$i = 10;\n$f = 10.5;\n$s = \"Hello\";\n$a = array(1,2,3,4,5);\n$b = true;\n$n = NULL;\n$obj = new foo;\n$res = fopen(__FILE__, \"r\");\necho \"Integer test: \" . (isset($i) ? \"YES\": \"NO\")  . \"\\n\";\necho \"Float test: \" . (isset($f) ? \"YES\": \"NO\") . \"\\n\";\necho \"String test: \" . (isset($s) ? \"YES\": \"NO\") . \"\\n\";\necho \"Array test: \" . (isset($a) ? \"YES\": \"NO\") . \"\\n\";\necho \"Boolean test: \" . (isset($b) ? \"YES\": \"NO\") . \"\\n\";\necho \"Null test: \" . (isset($n) ? \"YES\": \"NO\") . \"\\n\";\necho \"Object test: \" . (isset($obj) ? \"YES\": \"NO\") . \"\\n\";\necho \"Resource test: \" . (isset($res) ? \"YES\": \"NO\") . \"\\n\";\necho \"\\n\\nUnset the variables\\n\\n\";\nunset($i, $f, $s, $a, $b, $n, $obj, $res);\necho \"Integer test: \" . (isset($i) ? \"YES\": \"NO\")  . \"\\n\";\necho \"Float test: \" . (isset($f) ? \"YES\": \"NO\") . \"\\n\";\necho \"String test: \" . (isset($s) ? \"YES\": \"NO\") . \"\\n\";\necho \"Array test: \" . (isset($a) ? \"YES\": \"NO\") . \"\\n\";\necho \"Boolean test: \" . (isset($b) ? \"YES\": \"NO\") . \"\\n\";\necho \"Null test: \" . (isset($n) ? \"YES\": \"NO\") . \"\\n\";\necho \"Object test: \" . (isset($obj) ? \"YES\": \"NO\") . \"\\n\";\necho \"Resource test: \" . (isset($res) ? \"YES\": \"NO\") . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
