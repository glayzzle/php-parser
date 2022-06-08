// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug68799.phpt
  it("Bug #68799 (Free called on uninitialized pointer)", function () {
    expect(parser.parseCode("<?php\n/*\n* Pollute the heap. Helps trigger bug. Sometimes not needed.\n*/\nclass A {\n    function __construct() {\n        $a = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa';\n        $this->a = $a . $a . $a . $a . $a . $a;\n    }\n};\nfunction doStuff ($limit) {\n    $a = new A;\n    $b = array();\n    for ($i = 0; $i < $limit; $i++) {\n        $b[$i] = clone $a;\n    }\n    unset($a);\n    gc_collect_cycles();\n}\n$iterations = 3;\ndoStuff($iterations);\ndoStuff($iterations);\ngc_collect_cycles();\nprint_r(exif_read_data(__DIR__.'/bug68799.jpg'));\n?>")).toMatchSnapshot();
  });
});
