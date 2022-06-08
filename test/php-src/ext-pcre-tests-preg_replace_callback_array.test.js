// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/preg_replace_callback_array.phpt
  it("preg_replace_callback_array() basic functions", function () {
    expect(parser.parseCode("<?php\nclass Rep {\n    public function __invoke() {\n        return \"d\";\n    }\n}\nclass Foo {\n    public static function rep($rep) {\n        return \"ok\";\n    }\n}\nfunction b() {\n    return \"b\";\n}\nvar_dump(preg_replace_callback_array(\n    array(\n        \"/a/\" => 'b',\n        \"/b/\" => function () { return \"c\"; },\n        \"/c/\" => new Rep,\n        '/d/' => array(\"Foo\", \"rep\")), 'a'));\nvar_dump(preg_replace_callback_array(\n    array(\n        \"/a/\" => 'b',\n        \"/c/\" => new Rep,\n        \"/b/\" => function () { return \"ok\"; },\n        '/d/' => array(\"Foo\", \"rep\")), 'a'));\nvar_dump(preg_replace_callback_array(\n    array(\n        '/d/' => array(\"Foo\", \"rep\"),\n        \"/c/\" => new Rep,\n        \"/a/\" => 'b',\n        \"/b/\" => function($a) { return \"ok\"; }), 'a', -1, $count));\nvar_dump($count);\nvar_dump(preg_replace_callback_array(\n    array('/a/' => 'b', \"/c/\" => new Rep),\n    array('a', 'c')));\n?>")).toMatchSnapshot();
  });
});
