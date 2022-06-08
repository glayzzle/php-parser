// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/preg_replace_callback2.phpt
  it("preg_replace_callback() 2", function () {
    expect(parser.parseCode("<?php\nfunction f() {\n    throw new Exception();\n}\ntry {\nvar_dump(preg_replace_callback('/\\w/', 'f', 'z'));\n} catch(Exception $e) {}\nfunction g($x) {\n    return \"'$x[0]'\";\n}\nvar_dump(preg_replace_callback('@\\b\\w{1,2}\\b@', 'g', array('a b3 bcd', 'v' => 'aksfjk', 12 => 'aa bb')));\nvar_dump(preg_replace_callback('~\\A.~', 'g', array(array('xyz'))));\nvar_dump(preg_replace_callback('~\\A.~', function($m) { return strtolower($m[0]); }, 'ABC'));\n?>")).toMatchSnapshot();
  });
});
