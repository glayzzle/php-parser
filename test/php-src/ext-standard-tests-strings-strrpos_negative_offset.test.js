// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strrpos_negative_offset.phpt
  it("strr[i]pos() function with negative offset", function () {
    expect(parser.parseCode("<?php\n    var_dump(strrpos(\"haysthack\", 'ha', -9));\n    var_dump(strrpos(\"haystack\", 'h', -8));\n    var_dump(strrpos(\"haystack\", 'k', -1));\n    var_dump(strrpos(\"haystack\", \"ka\", -1));\n    var_dump(strrpos(\"haystack\", 'a', -3));\n    var_dump(strrpos(\"haystack\", 'a', -4));\n    try {\n        strrpos(\"haystack\", 'h', -9);\n    } catch (ValueError $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    var_dump(strripos(\"HAYSTHACk\", 'ha', -9));\n    var_dump(strripos(\"HAYSTACK\", 'h', -8));\n    var_dump(strripos(\"HAYSTACK\", 'k', -1));\n    var_dump(strripos(\"HAYSTACK\", \"ka\", -1));\n    var_dump(strripos(\"HAYSTACK\", 'a', -3));\n    var_dump(strripos(\"HAYSTACK\", 'a', -4));\n    try {\n        strripos(\"HAYSTACK\", 'h', -9);\n    } catch (ValueError $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n?>")).toMatchSnapshot();
  });
});
