// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/027.phpt
  it("ReflectionGenerator::getTrace()", function () {
    expect(parser.parseCode("<?php\nfunction foo()\n{\n    yield 1;\n}\n$g = foo();\n$r = new ReflectionGenerator($g);\n$g->next();\ntry {\n    $r->getTrace();\n} catch (ReflectionException $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
