// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug30578.phpt
  it("Bug #30578 (Output buffers flushed before calling __destruct functions)", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nclass Example\n{\n    function __construct()\n    {\n        ob_start();\n        echo \"This should be displayed last.\\n\";\n    }\n    function __destruct()\n    {\n        $buffered_data = ob_get_contents();\n        ob_end_clean();\n        echo \"This should be displayed first.\\n\";\n        echo \"Buffered data: $buffered_data\";\n    }\n}\n$obj = new Example;\n?>")).toMatchSnapshot();
  });
});
