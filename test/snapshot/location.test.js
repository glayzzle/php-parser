const parser = require('../main');

describe('Test locations', function() {
  it('#164 : expr must include ;', function() {
    expect(
      parser.parseEval(
        '$a = $b + 1;', {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
});