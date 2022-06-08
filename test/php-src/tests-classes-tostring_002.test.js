// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/tostring_002.phpt
  it("ZE2 __toString() in __destruct", function () {
    expect(parser.parseCode("<?php\nclass Test\n{\n    function __toString()\n    {\n        return \"Hello\\n\";\n    }\n    function __destruct()\n    {\n        echo $this;\n    }\n}\n$o = new Test;\n$o = NULL;\n$o = new Test;\n?>\n====DONE====")).toMatchSnapshot();
  });
});
