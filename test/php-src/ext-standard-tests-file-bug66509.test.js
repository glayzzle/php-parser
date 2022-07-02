// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug66509.phpt
  it("Bug #66509 (copy() showing $context parameter as required)", function () {
    expect(parser.parseCode("<?php\n$r = new \\ReflectionFunction('copy');\nforeach($r->getParameters() as $p) {\n    var_dump($p->isOptional());\n}\n?>")).toMatchSnapshot();
  });
});
