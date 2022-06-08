// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba_handlers.phpt
  it("DBA Handler Test", function () {
    expect(parser.parseCode("<?php\n$handler=\"flatfile\";\nrequire_once(__DIR__ .'/test.inc');\necho \"database handler: $handler\\n\";\nfunction check($h)\n{\n    if (!$h) {\n        return;\n    }\n    foreach ($h as $key) {\n        if ($key === \"flatfile\") {\n            echo \"Success: flatfile enabled\\n\";\n        }\n    }\n}\necho \"Test 1\\n\";\ncheck(dba_handlers());\necho \"Test 2\\n\";\ncheck(dba_handlers(false));\necho \"Test 3\\n\";\ncheck(dba_handlers(0));\necho \"Test 4 - full info\\n\";\n$h = dba_handlers(1);\nforeach ($h as $key => $val) {\n    if ($key === \"flatfile\") {\n        echo \"Success: flatfile enabled\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
