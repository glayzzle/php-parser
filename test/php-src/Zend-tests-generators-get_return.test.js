// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/get_return.phpt
  it("Generator::getReturn() success cases", function () {
    expect(parser.parseCode("<?php\nfunction gen1() {\n    return 42;\n    yield 24;\n}\n$gen = gen1();\n// Calling getReturn() directly here is okay due to auto-priming\nvar_dump($gen->getReturn());\nfunction gen2() {\n    yield 24;\n    return 42;\n}\n$gen = gen2();\nvar_dump($gen->current());\n$gen->next();\nvar_dump($gen->getReturn());\n// & for generators specifies by-reference yield, not return\n// so it's okay to return a literal\nfunction &gen3() {\n    $var = 24;\n    yield $var;\n    return 42;\n}\n$gen = gen3();\nvar_dump($gen->current());\n$gen->next();\nvar_dump($gen->getReturn());\n// Return types for generators specify the return of the function,\n// not of the generator return value, so this code is okay\nfunction gen4() : Generator {\n    yield 24;\n    return 42;\n}\n$gen = gen4();\nvar_dump($gen->current());\n$gen->next();\nvar_dump($gen->getReturn());\n// Has no explicit return, but implicitly return NULL at the end\nfunction gen5() {\n    yield 24;\n}\n$gen = gen5();\nvar_dump($gen->current());\n$gen->next();\nvar_dump($gen->getReturn());\n// Explicit value-less return also results in a NULL generator\n// return value and there is no interference with type declarations\nfunction gen6() : Generator {\n    return;\n    yield 24;\n}\n$gen = gen6();\nvar_dump($gen->getReturn());\n?>")).toMatchSnapshot();
  });
});
