// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug73337.phpt
  it("Bug #73337 (try/catch not working with two exceptions inside a same operation)", function () {
    expect(parser.parseCode("<?php\nclass d { function __destruct() { throw new Exception; } }\ntry { new d + new d; } catch (Exception $e) { print \"Exception properly caught\\n\"; }\n?>")).toMatchSnapshot();
  });
});
