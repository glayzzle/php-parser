// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug72762.phpt
  it("Bug #72762: Infinite loop while parsing a file with opcache enabled", function () {
    expect(parser.parseCode("<?php\nclass foo\n{\n    function bar()\n    {\n        $b = array();\n        foreach ($a as $a) {\n            foreach ($b as $k => $v) {\n            }\n            $b[$k] = $v;\n        }\n    }\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
