// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_open_error.phpt
  it("imap_open() ValueErrors", function () {
    expect(parser.parseCode("<?php\necho \"Checking with incorrect parameters\\n\" ;\nimap_open('', '', '');\ntry {\n    imap_open('', '', '', -1);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    imap_open('', '', '', 0, -1);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
