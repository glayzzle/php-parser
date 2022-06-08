// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/bug81490.phpt
  it("Bug #81490 (ZipArchive::extractTo() may leak memory)", function () {
    expect(parser.parseCode("<?php\n$zip = new ZipArchive();\n$zip->open(__DIR__ . \"/bug81490.zip\", ZipArchive::CREATE|ZipArchive::OVERWRITE);\n$zip->addFromString(\"\", \"yada yada\");\nmkdir(__DIR__ . \"/bug81490\");\n$zip->open(__DIR__ . \"/bug81490.zip\");\n$zip->extractTo(__DIR__ . \"/bug81490\", \"\");\n?>")).toMatchSnapshot();
  });
});
