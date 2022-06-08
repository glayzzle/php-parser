// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/compact_no_this.phpt
  it("compact() without object context", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n    (new class {\n        function test(){\n            return (static function(){ return compact('this'); })();\n        }\n    })->test()\n);\nvar_dump(compact('this'));\nvar_dump((function(){ return compact('this'); })());\n?>")).toMatchSnapshot();
  });
});
