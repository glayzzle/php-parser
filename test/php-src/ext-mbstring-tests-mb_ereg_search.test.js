// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ereg_search.phpt
  it("Testing mb_ereg_search() function", function () {
    expect(parser.parseCode("<?php\n    $str = \"中国abc + abc ?!？！字符＃　china string\";\n    $reg = \"\\w+\";\n    mb_regex_encoding(\"UTF-8\");\n    mb_ereg_search_init($str, $reg);\n    $r = mb_ereg_search();\n    if(!$r)\n    {\n        echo \"null\\n\";\n    }\n    else\n    {\n        $r = mb_ereg_search_getregs(); //get first result\n        do\n        {\n            var_dump($r[0]);\n            $r = mb_ereg_search_regs();//get next result\n        }\n        while($r);\n    }\n?>")).toMatchSnapshot();
  });
});
