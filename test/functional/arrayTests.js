var should = require("should");
var parser = require('../../main');

describe('Array without keys', function() {

  describe('of strings', function () {
    // Get result from parser
    var ast = parser.parseEval('array("item1", "item2", "item3")');

    it('should be of type array', function () {
      ast[1][0][0].should.be.exactly("array");
    });

    it('should have correct number of items', function () {
      ast[1][0][1].length.should.be.exactly(3);
    });

    it('should have correct item types and values', function () {
      ast[1][0][1][0].value[0].should.be.exactly("string");
      ast[1][0][1][0].value[1].should.be.exactly("item1");

      ast[1][0][1][1].value[0].should.be.exactly("string");
      ast[1][0][1][1].value[1].should.be.exactly("item2");

      ast[1][0][1][2].value[0].should.be.exactly("string");
      ast[1][0][1][2].value[1].should.be.exactly("item3");
    });
  });

  describe('of numbers', function () {
    // Get result from parser
    var ast = parser.parseEval('array(1, 2, 3)');

    it('should be of type array', function () {
      ast[1][0][0].should.be.exactly("array");
    });

    it('should have correct number of items', function () {
      ast[1][0][1].length.should.be.exactly(3);
    });

    it('should have correct item types and values', function () {
      ast[1][0][1][0].value[0].should.be.exactly("number");
      ast[1][0][1][0].value[1].should.be.exactly(1);

      ast[1][0][1][1].value[0].should.be.exactly("number");
      ast[1][0][1][1].value[1].should.be.exactly(2);

      ast[1][0][1][2].value[0].should.be.exactly("number");
      ast[1][0][1][2].value[1].should.be.exactly(3);
    });
  });

  describe('of strings and numbers', function () {
    // Get result from parser
    var ast = parser.parseEval('array(1, "item2", 3, "item4")');

    it('should be of type array', function () {
      ast[1][0][0].should.be.exactly("array");
    });

    it('should have correct number of items', function () {
      ast[1][0][1].length.should.be.exactly(4);
    });

    it('should have correct item types and values', function () {
      ast[1][0][1][0].value[0].should.be.exactly("number");
      ast[1][0][1][0].value[1].should.be.exactly(1);

      ast[1][0][1][1].value[0].should.be.exactly("string");
      ast[1][0][1][1].value[1].should.be.exactly("item2");

      ast[1][0][1][2].value[0].should.be.exactly("number");
      ast[1][0][1][2].value[1].should.be.exactly(3);

      ast[1][0][1][3].value[0].should.be.exactly("string");
      ast[1][0][1][3].value[1].should.be.exactly("item4");
    });
  });

  describe('of variables', function () {
    // Get result from parser
    var ast = parser.parseEval('array($obj1, $obj2, $obj3)');

    it('should be of type array', function () {
      ast[1][0][0].should.be.exactly("array");
    });

    it('should have correct number of items', function () {
      ast[1][0][1].length.should.be.exactly(3);
    });

    it('should have correct item types and values', function () {
      ast[1][0][1][0].value[0].should.be.exactly("var");
      ast[1][0][1][0].value[1].should.be.exactly("$obj1");

      ast[1][0][1][1].value[0].should.be.exactly("var");
      ast[1][0][1][1].value[1].should.be.exactly("$obj2");

      ast[1][0][1][2].value[0].should.be.exactly("var");
      ast[1][0][1][2].value[1].should.be.exactly("$obj3");
    });
  });

  // TODO -- Check this is valid PHP + check AST output is correct
  // describe('of objects', function () {
  //   // Get result from parser
  //   var ast = parser.parseEval('array(new stdClass(), new stdClass(), new stdClass())');

  //   it('should be of type array', function () {
  //     ast[1][0][0].should.be.exactly("array");
  //   });

  //   it('should have correct number of items', function () {
  //     ast[1][0][1].length.should.be.exactly(3);
  //   });

  //   it('should have correct item types and values', function () {
  //     ast[1][0][1][0].value[0].should.be.exactly("object");
  //     ast[1][0][1][0].value[1].should.be.exactly("stdClass()");

  //     ast[1][0][1][1].value[0].should.be.exactly("object");
  //     ast[1][0][1][1].value[1].should.be.exactly("stdClass()");

  //     ast[1][0][1][2].value[0].should.be.exactly("object");
  //     ast[1][0][1][2].value[1].should.be.exactly("stdClass()");
  //   });
  // });

  describe('of arrays', function () {
    // Get result from parser
    var ast = parser.parseEval('array(array("item1", "item2"), array("item3", "item4"), array("item5", "item6"))');

    it('should be of type array', function () {
      ast[1][0][0].should.be.exactly("array");
    });

    it('should have correct number of items', function () {
      ast[1][0][1].length.should.be.exactly(3);
    });

    it('should have correct item types and values', function () {
      ast[1][0][1][0].value[0].should.be.exactly("array");
      ast[1][0][1][0].value[1].should.be.match([{ key: false, value: ["string", "item1"] }, { key: false, value: ["string", "item2"] }]);

      ast[1][0][1][1].value[0].should.be.exactly("array");
      ast[1][0][1][1].value[1].should.be.match([{ key: false, value: ["string", "item3"] }, { key: false, value: ["string", "item4"] }]);

      ast[1][0][1][2].value[0].should.be.exactly("array");
      ast[1][0][1][2].value[1].should.be.match([{ key: false, value: ["string", "item5"] }, { key: false, value: ["string", "item6"] }]);
    });
  });

});
