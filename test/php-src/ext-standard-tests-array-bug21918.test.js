// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug21918.phpt
  it("Bug #21918 (different handling of positive vs. negative array indexes)", function () {
    expect(parser.parseCode("<?php\necho \"==Mixed==\\n\";\n$a = array(-1=>'a', '-2'=>'b', 3=>'c', '4'=>'d', 5=>'e', '6001'=>'f', '07'=>'g');\nforeach($a as $k => $v) {\n    var_dump($k);\n    var_dump($v);\n}\necho \"==Normal==\\n\";\n$b = array();\n$b[] = 'a';\nforeach($b as $k => $v) {\n    var_dump($k);\n    var_dump($v);\n}\necho \"==Negative==\\n\";\n$c = array('-2' => 'a');\nforeach($c as $k => $v) {\n    var_dump($k);\n    var_dump($v);\n}\n?>")).toMatchSnapshot();
  });
});
