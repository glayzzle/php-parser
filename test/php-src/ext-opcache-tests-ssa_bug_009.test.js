// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/ssa_bug_009.phpt
  it("Incorrect type inference", function () {
    expect(parser.parseCode("<?php\nclass PHP_CodeCoverage\n{\n    private function addUncoveredFilesFromWhitelist()\n    {\n        foreach ($uncoveredFiles as $uncoveredFile) {\n            for ($i = 1; $i <= $lines; $i++) {\n                $data[$uncoveredFile][$i] = PHP_CodeCoverage_Driver::LINE_NOT_EXECUTED;\n            }\n        }\n    }\n}\n?>\nOK")).toMatchSnapshot();
  });
});
