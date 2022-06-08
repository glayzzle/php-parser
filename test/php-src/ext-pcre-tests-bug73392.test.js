// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug73392.phpt
  it("Bug #73392 (A use-after-free in zend allocator management)", function () {
    expect(parser.parseCode("<?php\nclass Rep {\n    public function __invoke() {\n        return \"d\";\n    }\n}\nclass Foo {\n    public static function rep($rep) {\n        return \"ok\";\n    }\n}\nfunction b() {\n    return \"b\";\n}\nvar_dump(preg_replace_callback_array(\n    array(\n        \"/a/\" => 'b',\t\"/b/\" => function () { return \"c\"; }, \"/c/\" => new Rep, \"reporting\" => array(\"Foo\", \"rep\"),  \"a1\" => array(\"Foo\", \"rep\"),\n    ), 'a'));\n?>")).toMatchSnapshot();
  });
});
