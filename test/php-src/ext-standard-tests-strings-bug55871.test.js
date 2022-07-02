// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug55871.phpt
  it("Bug #55871 (Interruption in substr_replace()) (PHP7)", function () {
    expect(parser.parseCode("<?php\nclass test1 {\n    public function __toString() {\n        preg_match('//', '', $GLOBALS['my_var']);\n        return '';\n    }\n}\nclass test2 {\n        public function __toString() {\n        $GLOBALS['my_var'] += 0x08048000;\n                return '';\n        }\n}\nclass test3 {\n        public function __toString() {\n                $GLOBALS['my_var'] .= \"AAAAAAAA\";\n                return '';\n        }\n}\n$my_var = str_repeat('A', 40);\n$out = substr_replace(array(&$my_var), array(new test1), 40, 0);\nvar_dump($out, $my_var);\n$my_var = '0' . str_repeat('A', 39);\n$out = substr_replace(array(&$my_var), array(new test2), 40, 0);\nvar_dump($out, $my_var);\n$my_var = str_repeat('A', 40);\n$out = substr_replace(array(&$my_var), array(new test3), 40, 0);\nvar_dump($out, $my_var);\n?>")).toMatchSnapshot();
  });
});
