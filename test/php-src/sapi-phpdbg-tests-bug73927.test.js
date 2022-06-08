// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/bug73927.phpt
  it("Bug #73927 (phpdbg fails with windows error prompt at \"watch array\")", function () {
    expect(parser.parseCode("<?php\n// Generate some mock data\n$example = [1, 23, 23423, 256436, 3463, 4363, 457];\nforeach (range(1, 1000) as $val) {\n    $example[] = mt_rand(1, 10000);\n}\n// Stuff to debug\nfunction doCoolStuff($value)\n{\n    $value++;\n    return mt_rand(1, 1000);\n}\n$lower = [];\nforeach ($example as $key => $value) {\n    if ($value < 100) {\n        $lower[] = $value;\n    } else {\n        doCoolStuff($value);\n    }\n}\n?>\n")).toMatchSnapshot();
  });
});
