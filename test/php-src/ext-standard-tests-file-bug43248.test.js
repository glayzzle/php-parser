// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug43248.phpt
  it("Bug #43248 (backward compatibility break in realpath())", function () {
    expect(parser.parseCode("<?php\necho realpath(__DIR__ . '/../file/');\n?>")).toMatchSnapshot();
  });
});
