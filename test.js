class Users {
  constructor(firstName, lastName, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.borrowed = [];
  }
  borrowedBooks(bookName) {
    this.borrowed.push(bookName);
  }
}
let user1 = new Users("Karin", "kon", "KGC");
let user2 = new Users("Oleg", "Melihin", "Ashkelon");
let user3 = new Users("Yulia", "kon", "TLV");

user1.borrowedBooks("book1");
user1.borrowedBooks("book2");
user1.borrowedBooks("book3");
user1.borrowedBooks("book4");
user2.borrowedBooks("book2");
user3.borrowedBooks("book1");
user3.borrowedBooks("book4");

class bookReport {
  constructor(firstName) {
    this.firstName = firstName;
    this.allUsers = [];
  }
  addNewUser(user) {
    this.allUsers.push(user);
  }
  printReport() {
    this.allUsers.forEach((element) => {
      console.log(
        element.firstName +
          " " +
          element.lastName +
          " from " +
          element.city +
          " borrowed these books: " +
          element.borrowed
      );
    });
  }
}

let a = new bookReport("report1");

a.addNewUser(user1);
a.addNewUser(user2);
a.addNewUser(user3);
console.log(a);
a.printReport();
