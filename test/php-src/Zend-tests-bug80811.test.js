// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug80811.phpt
  it("Bug #80811: Function exec without $output but with $restult_code parameter crashes", function () {
    expect(parser.parseCode("<?php\necho 'Executing with all params:' . PHP_EOL;\nexec('echo Something', output: $output, result_code: $resultCode);\nvar_dump($resultCode);\necho 'Executing without output param:' . PHP_EOL;\nexec('echo Something', result_code: $resultCode);\nvar_dump($resultCode);\n?>")).toMatchSnapshot();
  });
});
