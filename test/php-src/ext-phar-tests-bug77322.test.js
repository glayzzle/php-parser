// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug77322.phpt
  it("Bug #77322 (PharData::addEmptyDir('/') Possible integer overflow)", function () {
    expect(parser.parseCode("<?php\n$zip = new PharData(__DIR__ . '/bug77322.zip');\n$zip->addEmptyDir('/');\nvar_dump($zip->count());\n$tar = new PharData(__DIR__ . '/bug77322.tar');\n$tar->addEmptyDir('/');\nvar_dump($tar->count());\n?>")).toMatchSnapshot();
  });
});
