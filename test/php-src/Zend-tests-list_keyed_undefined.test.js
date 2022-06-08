// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list_keyed_undefined.phpt
  it("list() with undefined keys", function () {
    expect(parser.parseCode("<?php\n$contrivedMixedKeyTypesExample = [\n    7 => \"the best PHP version\",\n    \"elePHPant\" => \"the cutest mascot\"\n];\nlist(5 => $five, \"duke\" => $duke) = $contrivedMixedKeyTypesExample;\nvar_dump($five, $duke);\n?>")).toMatchSnapshot();
  });
});
