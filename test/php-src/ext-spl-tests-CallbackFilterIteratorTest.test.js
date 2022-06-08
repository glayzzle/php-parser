// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/CallbackFilterIteratorTest.phpt
  it("CallbackFilterIterator", function () {
    expect(parser.parseCode("<?php\nclass A {\n    function test($value, $key, $inner) {\n        return test($value, $key, $inner);\n    }\n}\nclass B {\n    static function test($value, $key, $inner) {\n        return test($value, $key, $inner);\n    }\n}\nfunction test($value, $key, $inner) {\n    printf(\"%s / %s / %d / %d\\n\"\n        , $value\n        , $key\n        , $value == $inner->current()\n        , $key == $inner->key()\n    );\n    return $value === 1 || $value === 4;\n}\n$tests = array(\n    'instance method'    => function() { return array(new A, 'test'); },\n    'static method'      => function() { return array('B', 'test'); },\n    'static method (2)'  => function() { return 'B::test'; },\n    'function'           => function() { return 'test'; },\n    'anonymous function' => function() { return function($value, $key, $inner) { return test($value, $key, $inner); }; },\n);\nforeach($tests as $name => $test) {\n    $callback = $test();\n    $it = new ArrayIterator(range(1, 5));\n    $it = new CallbackFilterIterator($it, $callback);\n    echo \" = $name =\\n\";\n    foreach($it as $value) {\n        echo \"=> $value\\n\";\n    }\n    // same test, with no reference to callback\n    $it = new ArrayIterator(range(1, 5));\n    $it = new CallbackFilterIterator($it, $test());\n    unset($callback);\n    foreach($it as $value) {\n        echo \"=> $value\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
