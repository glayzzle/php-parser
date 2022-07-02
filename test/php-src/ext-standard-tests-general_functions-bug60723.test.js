// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug60723.phpt
  it("Bug #60723  (error_log error time has changed to UTC ignoring default timezo)", function () {
    expect(parser.parseCode("<?php\n$dir = __DIR__;\n$log = $dir . \"/tmp.err\";\nini_set(\"error_log\", $log);\necho $aa;\nerror_log(\"dummy\");\nreadfile($log);\nunlink($log);\n?>")).toMatchSnapshot();
  });
});
