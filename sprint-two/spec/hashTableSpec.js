describe('hashTable', function() {
  var hashTable;
  var people = [['Steven', 'Tyler'], ['George', 'Harrison'], ['Mr.', 'Doob'], ['Dr.', 'Sunshine'], ['John', 'Resig'], ['Brendan', 'Eich'], ['Alan', 'Turing']];


  beforeEach(function() {
    hashTable = new HashTable();
  });

  it('should have methods named "insert", "remove", and "retrieve', function() {
    expect(hashTable.insert).to.be.a('function');
    expect(hashTable.remove).to.be.a('function');
    expect(hashTable.retrieve).to.be.a('function');
  });

  it('should store values that were inserted', function() {
    hashTable.insert('Steven', 'Seagal');
    expect(hashTable.retrieve('Steven')).to.equal('Seagal');
  });

  it('should not contain values that were not inserted', function() {
    hashTable.insert('Steven', 'Spielberg');
    expect(hashTable.retrieve('Steven')).not.to.equal('Seagal');
  });

  it('should overwrite values that have the same key', function() {
    hashTable.insert('Bob', 'Loblaw');
    hashTable.insert('Bob', 'Barker');
    expect(hashTable.retrieve('Bob')).to.equal('Barker');
  });

  it('should not contain values that were removed', function() {
    hashTable.insert('Hercules', 'Tyler');
    hashTable.remove('Hercules');
    expect(hashTable.retrieve('Hercules')).to.equal(undefined);
  });

  it('should only remove the desired key in a collided index', function() {
    var oldHashFunction = window.getIndexBelowMaxForKey;
    window.getIndexBelowMaxForKey = function() { return 1; };
    hashTable.insert('vally1', 'Tyler');
    hashTable.insert('vally2', 'Creator');
    hashTable.remove('vally1');
    expect(hashTable.retrieve('vally1')).to.equal(undefined);
    expect(hashTable.retrieve('vally2')).to.equal('Creator');
    window.getIndexBelowMaxForKey = oldHashFunction;
  });

  it('should handle hash function collisions', function() {
    var v1 = 'val1';
    var v2 = 'val2';
    var oldHashFunction = window.getIndexBelowMaxForKey;
    window.getIndexBelowMaxForKey = function() { return 0; };
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    expect(hashTable.retrieve(v1)).to.equal(v1);
    expect(hashTable.retrieve(v2)).to.equal(v2);
    window.getIndexBelowMaxForKey = oldHashFunction;
  });

  // (Advanced! Remove the extra "x" when you want the following tests to run)
  xit ('should double in size when needed', function() {
    _.each(people, function(person) {
      var firstName = person[0];
      var lastName = person[1];
      hashTable.insert(firstName, lastName);
      expect(hashTable.retrieve(firstName)).to.equal(lastName);
    });
    expect(hashTable._limit).to.equal(16);
  });

  xit ('should halve in size when needed', function() {
    _.each(people, function(person) {
      var firstName = person[0];
      var lastName = person[1];
      hashTable.insert(firstName, lastName);
      expect(hashTable.retrieve(firstName)).to.equal(lastName);
    });
    expect(hashTable._limit).to.equal(16);
    hashTable.remove('George');
    hashTable.remove('Dr.');
    hashTable.remove('Steven');
    hashTable.remove('John');
    hashTable.remove('Mr.');
    expect(hashTable._limit).to.equal(8);
  });
});
