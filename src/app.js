var myModel, test; // note: we're defining a bunch of global variables here, which isn't good as a rule, but for learning purposes we'll do it until we get to tooling and setting up a full project

myModel = new MyModel();
test = new Test({model: myModel});


test.render(); 