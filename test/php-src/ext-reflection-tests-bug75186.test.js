// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug75186.phpt
  it("Bug #75186: Inconsistent reflection of Closure:::__invoke()", function () {
    expect(parser.parseCode("<?php\n$rc = new ReflectionClass(Closure::class);\nforeach ($rc->getMethods() as $method) {\n    if ($method->name == '__invoke') {\n        var_dump($method);\n        $method->invoke(\n            function($what) { echo \"Hello $what!\\n\"; },\n            \"World\"\n        );\n    }\n}\n?>")).toMatchSnapshot();
  });
});
