// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/pcre_count.phpt
  it("preg_replace() fifth parameter - count", function () {
    expect(parser.parseCode("<?php\n$regex = '/(([0-9a-z]+)-([0-9]+))-(([0-9]+)-([0-9]+))/';\n$string= '1-2-3-4 a-2-3-4 1-a-3-4 1-2-a-4 1-2-3-a a-a-a-a 4-3-2-1 100-200-300-400-500-600-700-800';\n$count = 0;\nvar_dump(preg_replace($regex, 'xxxx', $string, -1, $count));\nvar_dump($count);\n//////////////////////////////////////////////////////\n$regex = '/([a-z]+)/';\n$string= 'Here must only number like 42 and 13 appear';\nvar_dump(preg_replace($regex, 'xxxx', $string, -1, $count));\nvar_dump($count);\n////////////////////////////////////////////////////////\n$regex = '~((V(I|1)(4|A)GR(4|A))|(V(I|1)C(0|O)D(I|1)(N|\\/\\\\\\/)))~i';\n$string= 'Viagra V14GR4 Vicodin V1C0D1/\\/ v1c0d1/|/';\nvar_dump(preg_replace($regex, '...', $string, -1, $count));\nvar_dump($count);\n////////////////////////////////////////////////////////\n$regex = '~((V(I|1)(4|A)GR(4|A))|(V(I|1)C(0|O)D(I|1)(N|\\/\\\\\\/)))~i';\n$count = NULL;\n$string= 'Viagra V14GR4 Vicodin V1C0D1/\\/ v1c0d1/|/';\nvar_dump(preg_replace($regex, '...', $string, -1));\nvar_dump($count);\n?>")).toMatchSnapshot();
  });
});
