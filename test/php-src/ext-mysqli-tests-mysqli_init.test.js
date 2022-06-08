// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_init.phpt
  it("mysqli_init()", function () {
    expect(parser.parseCode("<?php\n    $link = mysqli_init();\n    if (!is_object($link) && false !== $link)\n        printf(\"[001] Expecting object/mysqli_link or boolean/false, got %s/%s\\n\", gettype($link), $link);\n    if (is_object($link) && 'mysqli' != get_class($link))\n        printf(\"[002] Expecting object of type mysqli got object of type %s\\n\", get_class($link));\n    if ($link)\n        mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
