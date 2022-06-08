// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_setCsvControl_variation002.phpt
  it("SplFileObject::setCsvControl() and ::getCsvControl() with empty $escape", function () {
    expect(parser.parseCode("<?php\n$file = new SplTempFileObject;\n$file->setCsvControl(',', '\"', '');\nvar_dump($file->getCsvControl());\n?>")).toMatchSnapshot();
  });
});
