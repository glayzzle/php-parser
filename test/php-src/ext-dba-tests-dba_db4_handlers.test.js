// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba_db4_handlers.phpt
  it("DBA DB4 Handler Test", function () {
    expect(parser.parseCode("<?php\n$handler=\"db4\";\nrequire_once(__DIR__ .'/test.inc');\necho \"database handler: $handler\\n\";\nfunction check($h)\n{\n    if (!$h) {\n        return;\n    }\n    foreach ($h as $key) {\n        if ($key === \"db4\") {\n            echo \"Success: db4 enabled\\n\";\n        }\n    }\n}\necho \"Test 1\\n\";\ncheck(dba_handlers());\necho \"Test 2 - full info\\n\";\n$h = dba_handlers(1);\nforeach ($h as $key => $val) {\n    if ($key === \"db4\") {\n        echo \"$val\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
