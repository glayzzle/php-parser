// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list_keyed_conversions.phpt
  it("list() with non-integer-or-string keys", function () {
    expect(parser.parseCode("<?php\n$results = [\n    0 => 0,\n    1 => 1,\n    \"\" => \"\"\n];\nlist(NULL => $NULL, 1.5 => $float, FALSE => $FALSE, TRUE => $TRUE) = $results;\nvar_dump($NULL, $float, $FALSE, $TRUE);\necho PHP_EOL;\nlist(\"0\" => $zeroString, \"1\" => $oneString) = $results;\nvar_dump($zeroString, $oneString);\nlist(STDIN => $resource) = [];\n?>")).toMatchSnapshot();
  });
});
