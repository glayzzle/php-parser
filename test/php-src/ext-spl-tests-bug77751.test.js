// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug77751.phpt
  it("Bug #77751: Writing to SplFileObject in ob_start gives segfault", function () {
    expect(parser.parseCode("<?php\necho \"No crash.\\n\";\n$logfile = new SplTempFileObject();\nob_start(function ($buffer) use ($logfile) {\n    $logfile->fwrite($buffer);\n    $logfile->fflush();\n    return \"\";\n});\necho \"hmm\\n\";\n?>")).toMatchSnapshot();
  });
});
