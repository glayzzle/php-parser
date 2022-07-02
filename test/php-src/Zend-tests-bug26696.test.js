// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug26696.phpt
  it("Bug #26696 (crash in switch() when string index is used)", function () {
    expect(parser.parseCode("<?php\n$str = 'asdd/?';\n$len = strlen($str);\nfor ($i = 0; $i < $len; $i++) {\n    switch ($str[$i]) {\n    case '?':\n        echo \"?+\\n\";\n        break;\n    default:\n        echo $str[$i].'-';\n        break;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
