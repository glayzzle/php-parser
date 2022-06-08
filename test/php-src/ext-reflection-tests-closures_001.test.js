// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/closures_001.phpt
  it("Reflection on closures", function () {
    expect(parser.parseCode("<?php\n$closure = function($a, $b = 0) { };\n$ro = new ReflectionObject($closure);\n$rm = $ro->getMethod('__invoke');\nvar_dump($rm->getNumberOfParameters());\nvar_dump($rm->getNumberOfRequiredParameters());\n$rms = $ro->getMethods();\nforeach($rms as $rm) {\n    if ($rm->getName() == '__invoke') {\n        var_dump($rm->getNumberOfParameters());\n        var_dump($rm->getNumberOfRequiredParameters());\n    }\n}\necho \"---\\n\";\n$rm = new ReflectionMethod($closure, '__invoke');\nvar_dump($rm->getName());\nvar_dump($rm->getNumberOfParameters());\nvar_dump($rm->getNumberOfRequiredParameters());\necho \"---\\n\";\n$rp = new ReflectionParameter(array($closure, '__invoke'), 0);\nvar_dump($rp->isOptional());\n$rp = new ReflectionParameter(array($closure, '__invoke'), 1);\nvar_dump($rp->isOptional());\n$rp = new ReflectionParameter(array($closure, '__invoke'), 'a');\nvar_dump($rp->isOptional());\n$rp = new ReflectionParameter(array($closure, '__invoke'), 'b');\nvar_dump($rp->isOptional());\necho \"---\\n\";\n$rp = new ReflectionParameter($closure, 0);\nvar_dump($rp->isOptional());\n$rp = new ReflectionParameter($closure, 1);\nvar_dump($rp->isOptional());\n$rp = new ReflectionParameter($closure, 'a');\nvar_dump($rp->isOptional());\n$rp = new ReflectionParameter($closure, 'b');\nvar_dump($rp->isOptional());\n?>")).toMatchSnapshot();
  });
});
