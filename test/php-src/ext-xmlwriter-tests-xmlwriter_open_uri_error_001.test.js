// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/xmlwriter_open_uri_error_001.phpt
  it("xmlwriter_open_uri with empty string as parameter", function () {
    expect(parser.parseCode("<?php\ntry {\n    xmlwriter_open_uri('');\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
