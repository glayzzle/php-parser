// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/bug78434.phpt
  it("Bug #78434: Generator skips first item after valid() call", function () {
    expect(parser.parseCode("<?php\n$function = function () {\n    yield 0;\n};\n$wrapper = function () use ($function) {\n    $generator = $function();\n    $generator->valid();\n    yield from $generator;\n    $generator = $function();\n    $generator->valid();\n    yield from $generator;\n};\nforeach ($wrapper() as $value) {\n    echo $value, \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
