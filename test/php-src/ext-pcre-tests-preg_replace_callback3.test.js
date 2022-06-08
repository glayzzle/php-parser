// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/preg_replace_callback3.phpt
  it("preg_replace_callback() 3", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(preg_replace_callback(1,2,3));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(preg_replace_callback(1,2,3,4));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n$a = 5;\ntry {\n    var_dump(preg_replace_callback(1,2,3,4,$a));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
