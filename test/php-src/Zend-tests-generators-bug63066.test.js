// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/bug63066.phpt
  it("Bug #63066 (Calling an undefined method in a generator results in a seg fault)", function () {
    expect(parser.parseCode("<?php\nfunction gen($o)\n{\n    yield 'foo';\n    $o->fatalError();\n}\nforeach(gen(new stdClass()) as $value)\n    echo $value, \"\\n\";\n?>")).toMatchSnapshot();
  });
});
