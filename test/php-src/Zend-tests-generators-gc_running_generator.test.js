// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/gc_running_generator.phpt
  it("GC on running generator", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    yield;\n    // Trigger GC while $v is being reassigned.\n    $ary = [new stdClass, new stdClass, new stdClass];\n    $ary[0]->foo = $ary;\n    foreach ($ary as &$v) { }\n}\nfor ($i = 0; $i < 10000; $i++) {\n    // Make sure gen is registered as a GC root.\n    $gen = gen();\n    $gen2 = $gen;\n    unset($gen);\n    foreach ($gen2 as $v) {}\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
