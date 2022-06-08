// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionGenerator_in_Generator.phpt
  it("ReflectionGenerator while being currently executed", function () {
    expect(parser.parseCode("<?php\nfunction call(ReflectionGenerator $ref, $method, $rec = true) {\n    if ($rec) {\n        call($ref, $method, false);\n        return;\n    }\n    var_dump($ref->$method());\n}\nfunction doCalls(ReflectionGenerator $ref) {\n    call($ref, \"getTrace\");\n    call($ref, \"getExecutingLine\");\n    call($ref, \"getExecutingFile\");\n    call($ref, \"getExecutingGenerator\");\n    call($ref, \"getFunction\");\n    call($ref, \"getThis\");\n}\n($gen = (function() use (&$gen) {\n    $ref = new ReflectionGenerator($gen);\n    doCalls($ref);\n    yield from (function() use ($ref) {\n        doCalls($ref);\n        yield; // Generator !\n    })();\n})())->next();\n?>")).toMatchSnapshot();
  });
});
