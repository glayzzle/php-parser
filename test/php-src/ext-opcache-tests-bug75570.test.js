// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug75570.phpt
  it("Bug #75570 (\"Narrowing occurred during type inference\" error)", function () {
    expect(parser.parseCode("<?php\nfunction renderRawGraph(array $parents) {\n    $graph = array();\n    foreach ($parents as $p) {\n        foreach ($graph as $v) {\n            $graph[$v]['line'] = 1;\n        }\n        $graph[] = array(\n            'line' => 1,\n        );\n    }\n}\n?>\nOK")).toMatchSnapshot();
  });
});
