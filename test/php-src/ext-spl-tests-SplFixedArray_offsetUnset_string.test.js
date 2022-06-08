// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFixedArray_offsetUnset_string.phpt
  it("Check removing an item from an array when the offset is not an integer.", function () {
    expect(parser.parseCode("<?php\n    // Create a fixed array\n    $fixedArray = new SplFixedArray(5);\n    // Fill it up\n    for ($i=0; $i < 5; $i++) {\n        $fixedArray[$i] = \"PHPNW Testfest\";\n    }\n    // remove an item\n    $fixedArray->offsetUnset(\"4\");\n    var_dump($fixedArray);\n?>")).toMatchSnapshot();
  });
});
