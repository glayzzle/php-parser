// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/jump04.phpt
  it("jump 04: goto from loop (backward)", function () {
    expect(parser.parseCode("<?php\n$s = \"X\";\necho \"1: ok\\n\";\nL1: if ($s != \"X\") {\n    echo \"4: ok\\n\";\n} else {\n    echo \"2: ok\\n\";\n    while ($s != \"XXX\") {\n        echo \"3: ok\\n\";\n        $s .= \"X\";\n        goto L1;\n        echo \"bug\\n\";\n    }\n    echo \"bug\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
