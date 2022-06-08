// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_construct_invalidurl.phpt
  it("Phar object passed URL", function () {
    expect(parser.parseCode("<?php\ntry {\n    $a = new Phar('http://should.fail.com');\n} catch (UnexpectedValueException $e) {\n    echo $e->getMessage(),\"\\n\";\n}\ntry {\n    $a = new Phar('http://');\n} catch (UnexpectedValueException $e) {\n    echo $e->getMessage(),\"\\n\";\n}\ntry {\n    $a = new Phar('http:/');\n} catch (UnexpectedValueException $e) {\n    echo $e->getMessage(),\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
