// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/extract_error.phpt
  it("Test extract() function (error conditions)", function () {
    expect(parser.parseCode("<?php\n/* Testing Error Conditions */\necho \"*** Testing Error Conditions ***\\n\";\n/* Invalid second argument ( only 0-6 is valid) */\n$arr = array(1);\ntry {\n    var_dump( extract($arr, -1) );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump( extract($arr, 7 , \"wddr\") );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n/* Two Arguments, second as prefix but without prefix string as third argument */\ntry {\n    var_dump( extract($arr,EXTR_PREFIX_IF_EXISTS) );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
