// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/return_from_by_ref_generator.phpt
  it("Return from by-ref generator", function () {
    expect(parser.parseCode("<?php\nfunction &gen() {\n    yield;\n    $arr = [42];\n    return $arr[0];\n}\nfunction gen2() {\n    var_dump(yield from gen());\n}\ngen2()->next();\n?>")).toMatchSnapshot();
  });
});
