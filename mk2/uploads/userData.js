const { db } = require("../models/UserModel");

db.users.insert([{name: '임치헌', age: '26', sex: '남', email: 'lch950223@gmail.com'}, 
                {name: '김동훈', age: '26', sex: '남', email: 'kdh1234@gmail.com'}, 
                {name: '이상재', age: '27', sex: '남', email: 'lsj1234@gmail.com'}]);