// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list_keyed_trailing_comma.phpt
  it("list() with keys and a trailing comma", function () {
    expect(parser.parseCode("<?php\n$antonyms = [\n    \"good\" => \"bad\",\n    \"happy\" => \"sad\",\n];\nlist(\n    \"good\" => $good,\n    \"happy\" => $happy\n) = $antonyms;\nvar_dump($good, $happy);\necho PHP_EOL;\n$antonyms = [\n    \"good\" => \"bad\",\n    \"happy\" => \"sad\",\n];\nlist(\n    \"good\" => $good,\n    \"happy\" => $happy,\n) = $antonyms;\nvar_dump($good, $happy);\n?>")).toMatchSnapshot();
  });
});
