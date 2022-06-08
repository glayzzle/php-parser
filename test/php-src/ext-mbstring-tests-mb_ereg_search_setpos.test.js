// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ereg_search_setpos.phpt
  it("mb_ereg_search_setpos() function", function () {
    expect(parser.parseCode("<?php\nmb_regex_encoding('iso-8859-1');\n$test_str = 'I�t�rn�ti�n�liz�ti�n'; // Length = 20\nvar_dump(mb_ereg_search_setpos(50)); // OK\ntry {\n    var_dump(mb_ereg_search_setpos(-1)); // Error\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nmb_ereg_search_init($test_str);\n$positions = array( 5, 20, 21, 25, 0, -5, -20, -30);\nforeach($positions as $pos) {\n    echo(\"\\n* Position: $pos :\\n\");\n    try {\n        var_dump(mb_ereg_search_setpos($pos));\n    } catch (\\ValueError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n    try {\n        var_dump(mb_ereg_search_getpos());\n    } catch (\\ValueError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
