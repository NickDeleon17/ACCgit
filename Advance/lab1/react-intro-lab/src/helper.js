
const userSortByAge = (user)=>{
    return user.sort((a, b)=> b.Age - a.Age);
  }

export {userSortByAge}