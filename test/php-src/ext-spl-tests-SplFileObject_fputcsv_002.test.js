// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_fputcsv_002.phpt
  it("SplFileObject::fputcsv(): Checking data after calling the function", function () {
    expect(parser.parseCode("<?php\n$fo = new SplFileObject(__DIR__ . '/SplFileObject_fputcsv1.csv', 'w');\n$data = array(1, 2, 'foo', 'haha', array(4, 5, 6), 1.3, null);\n$fo->fputcsv($data);\nvar_dump($data);\n?>")).toMatchSnapshot();
  });
});
