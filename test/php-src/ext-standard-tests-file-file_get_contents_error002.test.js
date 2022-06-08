// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/file_get_contents_error002.phpt
  it("file_get_contents() test using negative parameter for length (last parameter)", function () {
    expect(parser.parseCode("<?php\ntry {\n    file_get_contents(\"http://checkip.dyndns.com\",null,null,0,-1);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
