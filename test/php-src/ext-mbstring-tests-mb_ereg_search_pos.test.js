// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ereg_search_pos.phpt
  it("mb_ereg_search_pos() # a test for the basic function of mb_ereg_search_pos", function () {
    expect(parser.parseCode("<?php\nmb_regex_encoding('iso-8859-1');\n$test_str = 'I�t�rn�ti�n�liz�ti�n';\nif(mb_ereg_search_init($test_str))\n{\n    $val=mb_ereg_search_pos(\"n�ti�n\");\n    var_dump($val);\n}\nelse{\n    var_dump(\"false\");\n}\n?>")).toMatchSnapshot();
  });
});
