// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug66836.phpt
  it("Bug #66836 (DateTime::createFromFormat 'U' with pre 1970 dates fails parsing)", function () {
    expect(parser.parseCode("<?php\nforeach (['-1', '-86400', '-1000000'] as $timestamp) {\n    $dt = DateTime::createFromFormat('U', $timestamp);\n    var_dump($dt->format('U') === $timestamp);\n}\n?>")).toMatchSnapshot();
  });
});
