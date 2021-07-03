describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should return true if a set has the value', function() {
    set.add('hello');
    expect(set.has('hello')).to.equal(true);
    set.remove('hello');
    expect(set.has('hello')).to.equal(false);
  });

  it('should return the size of a set', function () {
    set.add('hello');
    set.add('world');
    set.add('I am so happy that I figured this out');
    expect(set.size()).to.equal(3);
    set.remove('world');
    expect(set.size()).to.equal(2);
  });

});
