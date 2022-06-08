// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug69802.phpt
  it("Bug #69802 (Reflection on Closure::__invoke borks type hint class name)", function () {
    expect(parser.parseCode("<?php\n$f = function(stdClass $x): stdClass {};\n$r = new ReflectionMethod($f, '__invoke');\nvar_dump($r->getParameters()[0]->getName());\nvar_dump($r->getParameters()[0]->getClass());\necho $r->getParameters()[0], \"\\n\";\necho $r->getReturnType()->getName(), \"\\n\";\necho $r,\"\\n\";\n?>")).toMatchSnapshot();
  });
});
