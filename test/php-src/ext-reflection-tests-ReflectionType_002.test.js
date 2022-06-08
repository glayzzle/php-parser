// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionType_002.phpt
  it("ReflectionType leak", function () {
    expect(parser.parseCode("<?php\n$closure = function(Test $x): Test2 { return new Test2($x); };\n$rm = new ReflectionMethod($closure, '__invoke');\n$rp = $rm->getParameters()[0];\n$rt = $rp->getType();\n$rrt = $rm->getReturnType();\nunset($rm, $rp);\nvar_dump($rt->getName(), $rrt->getName());\n?>")).toMatchSnapshot();
  });
});
