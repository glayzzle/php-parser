// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/uniqid_basic.phpt
  it("Test uniqid() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing uniqid() : basic functionality ***\\n\";\necho \"\\nuniqid() without a prefix\\n\";\nvar_dump(uniqid());\nvar_dump(uniqid('', true));\nvar_dump(uniqid('', false));\necho \"\\n\\n\";\necho \"uniqid() with a prefix\\n\";\n// Use a fixed prefix so we can ensure length of o/p id is fixed\n$prefix = array (\n                99999,\n                \"99999\",\n                10.5e2,\n                true,\n                false\n                );\nfor ($i = 0; $i < count($prefix); $i++) {\n    var_dump(uniqid($prefix[$i]));\n    var_dump(uniqid($prefix[$i], true));\n    var_dump(uniqid($prefix[$i], false));\n    echo \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
