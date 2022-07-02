// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug76502.phpt
  it("Bug #76502: Chain of mixed exceptions and errors does not serialize properly", function () {
    expect(parser.parseCode("<?php\n$examples = [\n    \"Exception(Exception())\" => new Exception(\"outer\", 0,  new Exception(\"inner\")),\n    \"Error(Error())\"         => new Error(\"outer\", 0, new Error(\"inner\")),\n    \"Error(Exception())\"     => new Error(\"outer\", 0, new Exception(\"inner\")),\n    \"Exception(Error())\"     => new Exception(\"outer\", 0, new Error(\"inner\"))\n];\nforeach ($examples as $name => $example) {\n    $processed = unserialize(serialize($example));\n    $processedPrev = $processed->getPrevious();\n    echo \"---- $name ----\\n\";\n    echo \"before: \", get_class($example), \".previous == \",\n        get_class($example->getPrevious()), \"\\n\";\n    echo \"after : \", get_class($processed), \".previous == \",\n        $processedPrev ? get_class($processedPrev) : \"null\", \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
