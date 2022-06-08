// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/temporary_cleaning_002.phpt
  it("Temporary leak on rope (encapsed string)", function () {
    expect(parser.parseCode("<?php\nclass Obj {\n    function __get($x) {\n        throw new Exception();\n    }\n}\n$x = new Obj;\n$y = 0;\ntry {\n    $r = \"$y|$x->x|\";\n} catch (Exception $e) {\n}\ntry {\n    $r = \"$x->x|$y|\";\n} catch (Exception $e) {\n}\ntry {\n    $r = \"$y|$y|$x->x\";\n} catch (Exception $e) {\n}\n?>\n==DONE==")).toMatchSnapshot();
  });
});
