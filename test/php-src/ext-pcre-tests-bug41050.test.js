// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug41050.phpt
  it("Bug #41050 (pcre 7.0 regression)", function () {
    expect(parser.parseCode("<?php\n// by legolas558\n$regex = '/(insert|drop|create|select|delete|update)([^;\\']*('.\"('[^']*')+\".')?)*(;|$)/i';\n$sql = 'SELECT * FROM #__components';\nif (preg_match($regex,$sql, $m)) echo 'matched';\nelse echo 'not matched';\nprint_r($m);\n?>")).toMatchSnapshot();
  });
});
