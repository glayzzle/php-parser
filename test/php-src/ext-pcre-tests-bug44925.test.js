// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug44925.phpt
  it("Bug #44925 (preg_grep() modifies input array)", function () {
    expect(parser.parseCode("<?php\n$str1 = 'a';\n$str2 = 'b';\n$array=Array(\"1\",2,3,1.1,FALSE,NULL,Array(), $str1, &$str2);\nvar_dump($array);\nvar_dump(preg_grep('/do not match/',$array));\n$a = preg_grep('/./',$array);\nvar_dump($a);\n$str1 = 'x';\n$str2 = 'y';\nvar_dump($a); // check if array is still ok\nvar_dump($array);\n?>")).toMatchSnapshot();
  });
});
