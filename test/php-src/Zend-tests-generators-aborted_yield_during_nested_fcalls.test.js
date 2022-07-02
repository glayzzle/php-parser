// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/aborted_yield_during_nested_fcalls.phpt
  it("Aborted yield during nested calls", function () {
    expect(parser.parseCode("<?php\nfunction func() {}\nfunction gen($x) {\n    func(func($x, $x, func($x, yield)));\n}\n$gen = gen(\"x\");\n$gen->rewind();\n?>\n===DONE===")).toMatchSnapshot();
  });
});
