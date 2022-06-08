// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/generator_run.phpt
  it("Ensure proper saving of EX(opline)", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n\ttry {\n\t\tthrow new Exception;\n\t} catch(Exception $e) {\n\t\tyield \"caught Generator exception\";\n\t}\n}\nforeach (gen() as $v) {\n\tprint $v;\n}\n")).toMatchSnapshot();
  });
});
