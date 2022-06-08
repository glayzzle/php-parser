// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/bug69419.phpt
  it("Bug #69419: Returning compatible sub generator produces a warning", function () {
    expect(parser.parseCode("<?php\nfunction & genRefInner() {\n    $var = 1;\n    yield $var;\n}\nfunction & genRefOuter() {\n    return genRefInner();\n}\nforeach(genRefOuter() as $i) {\n    var_dump($i);\n}\n?>")).toMatchSnapshot();
  });
});
