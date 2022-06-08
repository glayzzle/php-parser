// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_open_bug74432.phpt
  it("Bug #74432, BC issue on undocumented connect string", function () {
    expect(parser.parseCode("<?php\n    /* This behavior is undocumented, but might be in use. Until there's no officially\n        supported alternative, ensure changes doesn't cause BC breach. Otherwise,\n        the test should be removed once the undocumented behavior changes. */\n    require_once(\"connect.inc\");\n    $handle = mysqli_connect(\"$host:$port\", $user, $passwd);\n    var_dump($handle);\n    if ($handle) {\n        mysqli_close($handle);\n    }\n?>")).toMatchSnapshot();
  });
});
