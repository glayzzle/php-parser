// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/028.phpt
  it("ReflectionGenerator::__construct()", function () {
    expect(parser.parseCode("<?php\nfunction foo()\n{\n    yield 1;\n}\n$g = foo();\n$g->next();\ntry {\n    $r = new ReflectionGenerator($g);\n} catch (ReflectionException $e) {\n    echo \"Done!\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
