// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/tostring_003.phpt
  it("ZE2 __toString() in __destruct/exception", function () {
    expect(parser.parseCode("<?php\nclass Test\n{\n    function __toString()\n    {\n        throw new Exception(\"Damn!\");\n        return \"Hello\\n\";\n    }\n    function __destruct()\n    {\n        echo $this;\n    }\n}\ntry\n{\n    $o = new Test;\n    $o = NULL;\n}\ncatch(Exception $e)\n{\n    var_dump($e->getMessage());\n}\n?>\n====DONE====")).toMatchSnapshot();
  });
});
