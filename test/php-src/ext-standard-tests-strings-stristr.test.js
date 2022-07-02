// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/stristr.phpt
  it("stristr() function", function () {
    expect(parser.parseCode("<?php\n    var_dump(stristr(\"tEsT sTrInG\", \"tEsT\"));\n    var_dump(stristr(\"tEsT sTrInG\", \"stRiNg\"));\n    var_dump(stristr(\"tEsT sTrInG\", \"stRiN\"));\n    var_dump(stristr(\"tEsT sTrInG\", \"t S\"));\n    var_dump(stristr(\"tEsT sTrInG\", \"g\"));\n    var_dump(md5(stristr(\"te\".chr(0).\"st\", chr(0))));\n    var_dump(stristr(\"\", \"\"));\n    var_dump(stristr(\"a\", \"\"));\n    var_dump(stristr(\"\", \"a\"));\n    var_dump(md5(stristr(\"\\\\\\\\a\\\\\", \"\\\\a\")));\n    var_dump(stristr(\"tEsT sTrInG\", \" \"));\n?>")).toMatchSnapshot();
  });
});
