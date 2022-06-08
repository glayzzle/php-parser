// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/get_return_types.phpt
  it("Test different types of generator return values (VM operands)", function () {
    expect(parser.parseCode("<?php\nfunction gen1() {\n    return; // CONST\n    yield;\n}\n$gen = gen1();\nvar_dump($gen->getReturn());\nfunction gen2() {\n    return \"str\"; // CONST\n    yield;\n}\n$gen = gen2();\nvar_dump($gen->getReturn());\nfunction gen3($var) {\n    return $var; // CV\n    yield;\n}\n$gen = gen3([1, 2, 3]);\nvar_dump($gen->getReturn());\nfunction gen4($obj) {\n    return $obj->prop; // VAR\n    yield;\n}\n$gen = gen4((object) ['prop' => 321]);\nvar_dump($gen->getReturn());\nfunction gen5($val) {\n    return (int) $val; // TMP\n    yield;\n}\n$gen = gen5(\"42\");\nvar_dump($gen->getReturn());\n?>")).toMatchSnapshot();
  });
});
