// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/com_dotnet/tests/27974.phpt
  it("COM: mapping a safearray", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ntry {\n    $v = new VARIANT(array(\"123\", \"456\", \"789\"));\n    var_dump($v);\n    print $v[0] . \"\\n\";\n    print $v[1] . \"\\n\";\n    print $v[2] . \"\\n\";\n    $v[1] = \"hello\";\n    foreach ($v as $item) {\n        var_dump($item);\n    }\n    try {\n        $v[3] = \"shouldn't work\";\n    } catch (com_exception $e) {\n        if ($e->getCode() != DISP_E_BADINDEX) {\n            throw $e;\n        }\n        echo \"Got BADINDEX exception OK!\\n\";\n    }\n    echo \"OK!\";\n} catch (Exception $e) {\n    print $e;\n}\n?>")).toMatchSnapshot();
  });
});
