var person = {
  name: "Abdu Fall",
  age: 28,
  greeting: function() {
    return "Greetings, my name " + this.name + " and I am " + this.age + " years old.";
  },
  salute: function() {
    return "Good morning!, and in case I dont see you, good afternoon, good evening and good night!";
  }
};