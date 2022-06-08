// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_039.phpt
  it("039: Constant declaration", function () {
    expect(parser.parseCode("<?php\nfunction foo($a = A) {\n    echo \"$a\\n\";\n}\nfunction bar($a = array(A => B)) {\n    foreach ($a as $key => $val) {\n        echo \"$key\\n\";\n        echo \"$val\\n\";\n    }\n}\nconst A = \"ok\";\nconst B = A;\necho A . \"\\n\";\necho B . \"\\n\";\nfoo();\nbar();\n?>")).toMatchSnapshot();
  });
});
