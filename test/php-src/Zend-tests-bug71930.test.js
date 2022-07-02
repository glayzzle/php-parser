// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71930.phpt
  it("Bug #71930 (_zval_dtor_func: Assertion `(arr)->gc.refcount <= 1' failed)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public static function dummy() {\n    }\n}\n$a = array();\n$a[] = \"A\";\n$a[] = \"dummy\";\n$ch1 = curl_init();\ncurl_setopt($ch1, CURLOPT_HEADERFUNCTION, $a);\nset_error_handler($a);\nset_error_handler(function()use($ch1){});\nset_error_handler(function(){});\n?>\nokey")).toMatchSnapshot();
  });
});
