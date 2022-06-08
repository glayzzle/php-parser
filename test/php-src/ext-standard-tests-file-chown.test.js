// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/chown.phpt
  it("chown() with NULL as user name", function () {
    expect(parser.parseCode("<?php\nchown(\"sjhgfskhagkfdgskjfhgskfsdgfkdsajf\", 0);\necho \"ALIVE\\n\";\n?>")).toMatchSnapshot();
  });
});
