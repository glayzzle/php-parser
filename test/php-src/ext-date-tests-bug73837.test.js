// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug73837.phpt
  it("Bug #73837: Milliseconds in DateTime()", function () {
    expect(parser.parseCode("<?php\n$startTS = time();\n$prev_dt = new DateTime();\nwhile (time() < $startTS + 2) {\n    $dt = new DateTime();\n    if ($prev_dt > $dt) {\n        var_dump($prev_dt->format(\"Y-m-d H:i:s.u\"));\n        var_dump($dt->format(\"Y-m-d H:i:s.u\"));\n        break;\n    }\n    $prev_dt = $dt;\n}\necho \"Finished\\n\";\n?>")).toMatchSnapshot();
  });
});
