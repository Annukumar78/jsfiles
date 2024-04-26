function User(email, password){
    this._email = email;
    this._password = password

    object.defineProperty(this, 'email' ,{
    })
    object.defineProperty(this, 'password',{

    })
}

const chai = new User('chai', '@gmail.com')

console.log(chai.email)