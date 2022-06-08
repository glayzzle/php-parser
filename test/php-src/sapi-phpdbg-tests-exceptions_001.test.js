// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/exceptions_001.phpt
  it("Properly handle exceptions going to be uncaught", function () {
    expect(parser.parseCode("<?php\n(function() {\n\ttry {\n\t\tfoo(); // Error\n\t} catch (\\Exception $e) {\n\t\tvar_dump($e);\n\t} finally {\n\t\tprint \"handle first\\n\";\n\t\treturn \"ok\";\n\t}\n})();\n(function() {\n\ttry {\n\t\tfoo(); // Error\n\t} catch (\\Exception $e) {\n\t\tvar_dump($e);\n\t} catch (\\ParseError $e) {\n\t\tvar_dump($e);\n\t}\n})();\n")).toMatchSnapshot();
  });
});
