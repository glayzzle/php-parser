// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug34062.phpt
  it("Bug #34062 (Crash in catch block when many arguments are used)", function () {
    expect(parser.parseCode("<?php\nfunction f1() { throw new Exception; }\nfunction f2() { echo \"here\\n\"; }\ntry {\n      // Currently it's the minimum required number of zeros\n      // If you remove one, it won't crash\n    max(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, f1());\n} catch (Exception $e) {\n    echo \"(((\\n\";\n    f2(0, 0, 0); // Won't crash if less than 3 zeros here\n    echo \")))\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
