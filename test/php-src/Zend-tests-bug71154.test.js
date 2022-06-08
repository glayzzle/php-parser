// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71154.phpt
  it("Bug #71154: Incorrect HT iterator invalidation causes iterator reuse", function () {
    expect(parser.parseCode("<?php\n$array = [1, 2, 3];\nforeach ($array as &$ref) {\n    /* Free array, causing free of iterator */\n    $array = [];\n    /* Reuse the iterator.\n     * However it will also be reused on next foreach iteration */\n    $it = new ArrayIterator([1, 2, 3]);\n    $it->rewind();\n}\nvar_dump($it->current());\n?>")).toMatchSnapshot();
  });
});
