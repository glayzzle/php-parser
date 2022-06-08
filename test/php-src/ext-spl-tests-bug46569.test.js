// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug46569.phpt
  it("Bug #46569 (SplFileObject: fgetcsv after seek returns wrong line)", function () {
    expect(parser.parseCode("<?php\n$file = new SplFileObject(__DIR__ . '/bug46569.csv');\n$file->seek(1);\nprint_r($file->fgetcsv());\n?>")).toMatchSnapshot();
  });
});
