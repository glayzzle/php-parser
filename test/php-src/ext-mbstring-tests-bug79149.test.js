// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug79149.phpt
  it("Bug #79149 (SEGV in mb_convert_encoding with non-string encodings)", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(mb_convert_encoding(\"\", \"UTF-8\", [0]));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(mb_convert_encoding('foo', 'UTF-8', array(['bar'], ['baz'])));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(mb_convert_encoding('foo', 'UTF-8', array(\"foo\\0bar\")));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
