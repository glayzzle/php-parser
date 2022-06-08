// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug67072.phpt
  it("Bug #67072 Echoing unserialized \"SplFileObject\" crash", function () {
    expect(parser.parseCode("<?php\necho unserialize('O:13:\"SplFileObject\":1:{s:9:\"*filename\";s:15:\"/home/flag/flag\";}');\n?>\n===DONE==")).toMatchSnapshot();
  });
});
