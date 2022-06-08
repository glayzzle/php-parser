// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/getservbyport_basic.phpt
  it("Test function getservbyport() by calling it more than or less than its expected arguments", function () {
    expect(parser.parseCode("<?php\n    if (file_exists(\"/etc/services\")) {\n        $file = \"/etc/services\";\n    }\n    elseif(substr(PHP_OS,0,3) == \"WIN\") $file = \"C:/WINDOWS/system32/drivers/etc/services\";\n    else die(PHP_OS. \" unsupported\");\n    if(file_exists($file)){\n        $services = file_get_contents($file);\n                $service = getservbyport( 80, \"tcp\" );\n                if(preg_match(\"/$service\\s+80\\/tcp/\", $services)) {\n            echo \"PASS\\n\";\n        }\n    }else{\n        echo \"Services file not found in expected location\\n\";\n    }\n?>")).toMatchSnapshot();
  });
});
