// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closures/closure_from_callable_gc.phpt
  it("Closure::fromCallable() and GC", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function method() {}\n    public function method2($y) {\n        static $x;\n        $x = $y;\n    }\n}\n$fn = Closure::fromCallable([new Test, 'method2']);\n$fn($fn);\nunset($fn); // Still referenced from static var.\ngc_collect_cycles();\n$fn = Closure::fromCallable([new Test, 'method']);\n$fn2 = $fn; unset($fn2); // Add to root buffer.\ngc_collect_cycles();\n?>\n===DONE===")).toMatchSnapshot();
  });
});
