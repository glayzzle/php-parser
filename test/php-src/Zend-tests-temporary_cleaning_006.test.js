// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/temporary_cleaning_006.phpt
  it("Exception after separation during indirect write to fcall result", function () {
    expect(parser.parseCode("<?php\nfunction throwing() { throw new Exception; }\nfunction getArray($x) { return [$x]; }\ntry {\n    getArray(0)[throwing()] = 1;\n} catch (Exception $e) {\n    echo \"Exception\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
