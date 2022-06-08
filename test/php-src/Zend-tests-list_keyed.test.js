// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list_keyed.phpt
  it("list() with keys", function () {
    expect(parser.parseCode("<?php\n$antonyms = [\n    \"good\" => \"bad\",\n    \"happy\" => \"sad\",\n];\nlist(\"good\" => $good_antonym, \"happy\" => $happy_antonym) = $antonyms;\nvar_dump($good_antonym, $happy_antonym);\necho PHP_EOL;\n$powersOfTwo = [\n    1 => 2,\n    2 => 4,\n    3 => 8\n];\nlist(1 => $two_1, 2 => $two_2, 3 => $two_3) = $powersOfTwo;\nvar_dump($two_1, $two_2, $two_3);\necho PHP_EOL;\n$contrivedMixedKeyTypesExample = [\n    7 => \"the best PHP version\",\n    \"elePHPant\" => \"the cutest mascot\"\n];\nlist(7 => $seven, \"elePHPant\" => $elePHPant) = $contrivedMixedKeyTypesExample;\nvar_dump($seven, $elePHPant);\necho PHP_EOL;\n$allTogetherNow = [\n    \"antonyms\" => $antonyms,\n    \"powersOfTwo\" => $powersOfTwo,\n    \"contrivedMixedKeyTypesExample\" => $contrivedMixedKeyTypesExample\n];\nlist(\n    \"antonyms\" => list(\"good\" => $good_antonym, \"happy\" => $happy_antonym),\n    \"powersOfTwo\" => list(1 => $two_1, 2 => $two_2, 3 => $two_3),\n    \"contrivedMixedKeyTypesExample\" => list(7 => $seven, \"elePHPant\" => $elePHPant)\n) = $allTogetherNow;\nvar_dump($good_antonym, $happy_antonym);\nvar_dump($two_1, $two_2, $two_3);\nvar_dump($seven, $elePHPant);\n?>")).toMatchSnapshot();
  });
});
