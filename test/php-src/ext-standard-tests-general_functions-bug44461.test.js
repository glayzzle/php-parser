// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug44461.phpt
  it("Bug #44461 (parse_ini_file crashes)", function () {
    expect(parser.parseCode("<?php\nfile_put_contents(__DIR__ . 'bug44461.ini', <<<EOF\n[attachments]\nzip = \"application/zip\" ; MIME-type for ZIP files\nEOF\n);\nparse_ini_file(__DIR__ . 'bug44461.ini', true);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
