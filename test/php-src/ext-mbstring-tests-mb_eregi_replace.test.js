// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_eregi_replace.phpt
  it("Testing mb_eregi_replace() function", function () {
    expect(parser.parseCode("<?php\nfunction do_translit($st) {\n    $replacement = array(\n        \"й\"=>\"i\",\"ц\"=>\"c\",\"у\"=>\"u\",\"к\"=>\"k\",\"е\"=>\"e\",\"н\"=>\"n\",\n        \"г\"=>\"g\",\"ш\"=>\"sh\",\"щ\"=>\"sh\",\"з\"=>\"z\",\"х\"=>\"x\",\"ъ\"=>\"\\'\",\n        \"ф\"=>\"f\",\"ы\"=>\"i\",\"в\"=>\"v\",\"а\"=>\"a\",\"п\"=>\"p\",\"р\"=>\"r\",\n        \"о\"=>\"o\",\"л\"=>\"l\",\"д\"=>\"d\",\"ж\"=>\"zh\",\"э\"=>\"ie\",\"ё\"=>\"e\",\n        \"я\"=>\"ya\",\"ч\"=>\"ch\",\"с\"=>\"c\",\"м\"=>\"m\",\"и\"=>\"i\",\"т\"=>\"t\",\n        \"ь\"=>\"\\'\",\"б\"=>\"b\",\"ю\"=>\"yu\",\n        \"Й\"=>\"I\",\"Ц\"=>\"C\",\"У\"=>\"U\",\"К\"=>\"K\",\"Е\"=>\"E\",\"Н\"=>\"N\",\n        \"Г\"=>\"G\",\"Ш\"=>\"SH\",\"Щ\"=>\"SH\",\"З\"=>\"Z\",\"Х\"=>\"X\",\"Ъ\"=>\"\\'\",\n        \"Ф\"=>\"F\",\"Ы\"=>\"I\",\"В\"=>\"V\",\"А\"=>\"A\",\"П\"=>\"P\",\"Р\"=>\"R\",\n        \"О\"=>\"O\",\"Л\"=>\"L\",\"Д\"=>\"D\",\"Ж\"=>\"ZH\",\"Э\"=>\"IE\",\"Ё\"=>\"E\",\n        \"Я\"=>\"YA\",\"Ч\"=>\"CH\",\"С\"=>\"C\",\"М\"=>\"M\",\"И\"=>\"I\",\"Т\"=>\"T\",\n        \"Ь\"=>\"\\'\",\"Б\"=>\"B\",\"Ю\"=>\"YU\",\n    );\n    foreach($replacement as $i=>$u) {\n        $st = mb_eregi_replace($i,$u,$st);\n    }\n    return $st;\n}\nmb_regex_encoding('ISO-8859-1');\necho do_translit(\"Пеар\");\n?>")).toMatchSnapshot();
  });
});
