// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/msgfmt_format_simple_types_numeric_strings.phpt
  it("MessageFormatter::format(): simple types handling with numeric strings", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n//ini_set(\"intl.default_locale\", \"nl\");\n$mf = new MessageFormatter('en_US',\"\n    none\t\t\t{a}\n    number\t\t\t{b,number}\n    number integer\t{c,number,integer}\n    number currency\t{d,number,currency}\n    number percent\t{e,number,percent}\n    date\t\t\t{f,date}\n    time\t\t\t{g,time}\n    spellout\t\t{h,spellout}\n    ordinal\t\t\t{i,ordinal}\n    duration\t\t{j,duration}\n\");\n$ex = \"1336317965.5 str\";\nvar_dump($mf->format(array(\n'a' => $ex,\n'b' => $ex,\n'c' => $ex,\n'd' => $ex,\n'e' => $ex,\n'f' => \"  1336317965.5\",\n'g' => \"  1336317965.5\",\n'h' => $ex,\n'i' => $ex,\n'j' => $ex,\n)));\n?>")).toMatchSnapshot();
  });
});
