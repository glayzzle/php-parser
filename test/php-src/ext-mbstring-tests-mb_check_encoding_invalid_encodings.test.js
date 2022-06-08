// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_check_encoding_invalid_encodings.phpt
  it("mb_check_encoding() with invalid encodings", function () {
    expect(parser.parseCode("<?php\n$str = \"Normal string\";\n$arr = [1234, 12.34, TRUE, FALSE, NULL, $str, 'key'=>$str, $str=>'val'];\necho 'Using \"BAD\" as encoding' . \\PHP_EOL;\ntry {\n    var_dump(mb_check_encoding($str, 'BAD'));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(mb_check_encoding($arr, 'BAD'));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho 'Using \"pass\" as encoding' . \\PHP_EOL;\ntry {\n    var_dump(mb_check_encoding($str, 'pass'));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(mb_check_encoding($arr, 'pass'));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
