// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/com_dotnet/tests/bug39596.phpt
  it("Bug #39596 (Creating Variant of type VT_ARRAY)", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ntry {\n    $binding_string = array('aaa','bbb','ccc');\n    $v = new VARIANT( $binding_string, VT_ARRAY );\n    foreach ($v AS $element) {\n        print $element.\"\\n\";\n    }\n} catch (Exception $e) {\n    print $e;\n}\n?>")).toMatchSnapshot();
  });
});
