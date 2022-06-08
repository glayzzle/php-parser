// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/compact_this.phpt
  it("compact() with object context", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n    (new class {\n        function test(){\n            return compact('this');\n        }\n    })->test()\n);\nvar_dump(\n    (new class {\n        function test(){\n            return compact([['this']]);\n        }\n    })->test()\n);\nvar_dump(\n    (new class {\n        function test(){\n            return (function(){ return compact('this'); })();\n        }\n    })->test()\n);\n?>")).toMatchSnapshot();
  });
});
