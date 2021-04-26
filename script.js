/*
function myDay(newDay,cb){
    setTimeout(()=>{
        if (newDay){
            console.log('Wake Up in the morning');
            cb(null,1500);
        }else {
            cb('slept')
        }
    },1000)
}
function morningProcedur(wash,cb){
    setTimeout(()=>{
        if (wash){
            console.log('brushed my teeth');
            cb(null,500);
        }else {
            cb('I am late, have a coffee')
        }
    },1000)
}

function goWork(isJobDone, cb) {
  setTimeout(() => {
      if (isJobDone) {
        console.log('Job is done');
        cb(null, 5000);
      } else {
        cb('Job is not done');
      }
  }, 1000)
}
function drinkCoffee(drink,cb) {
    setTimeout(()=>{
        if (drink){
            console.log('coffee break');
            cb(null,500)
        }else{
            cb('ups')
        }
    })

}
function buyFood(money,cb) {
    setTimeout(() => {
      if (money > 800) {
        console.log('Buy something');
        cb(null,money - 300);
      } else {
        cb('No money ')
      }
    }, 500)
}
function goHome(chance,cb) {
    setTimeout(()=>{
        Math.random()>chance
            ?console.log('raine on street')
             : cb(null,'soaked in the rain')
    },1500)
}
function myWorkouts(energy,cb){
    setTimeout(()=>{
        Math.random()>energy
        ? console.log ('good job')
            :cb('i am tired')
    },1000)
}
function sleep(isTired) {
    setTimeout(() => {
        if (isTired) {
            console.log('Happy end');
        } else {
            console.log('Cant sleep')
        }
    },1000)
}
myDay(true, (err, data) => {
    if (err) {
        console.error(err);
        return
    }
    morningProcedur(data, (err) => {
        if (err) {
            console.error(err);
            return
        }
        goWork(true, (err) => {
            if (err) {
                console.error(err);
                return
            }
            drinkCoffee(50, (err) => {
                if (err) {
                    console.error(err);
                    return
                }
                buyFood(1500, (err) => {
                    if (err) {
                        console.error(err);
                        return
                    }
                    goHome(100, (err) => {
                        if (err) {
                            console.error(err);
                            return
                        }
                        myWorkouts(500,(err)=>{
                            if (err){
                                console.log(err);
                            }
                        })
                        sleep(true)
                    })
                })
            })
        })
    })
})
*/


function dayByday(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('wake up -go to the work')
            resolve(10000);
            reject('drink coffee')
        },1000)
    })
}
function morningProcedures(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if (Math.random() > .5) {
                console.log('you have time')
                resolve(100)
            }
            reject('you are late')

        }, 1000)
    })
}
function breakFast(){
    console.log('Time for breakfast');
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log('breakfast is done')
            resolve( 1500)
            reject('job is not done')

        },1000)
    })
}
function goWork(){
    return new Promise((resolve,reject )=>{
        setTimeout(()=>{
            console.log('job is done')
            resolve(500)
            reject('job is not done')
        },1000)
    })
}
function buyBread(money){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(money > 200) {
                console.log('buy bread')
                resolve(money - 200)
            }
            reject('no money go to home')


        },500)})
}
function clearHouse(clearH){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(clearH > 200){
                console.log('plus in karma')
                resolve(clearH +20)
            }
            reject('karma is bad')

        },1500)

    })
}
function goTotraine(energy){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (energy +200){
                console.log('workout')
                resolve(energy>=200)
            }
            reject('i am tired')

        },1000)
    })
}
function fridayDrinkBeer(beer){
    return new Promise((resolve, reject) => {
        const money = 500;
        const priceofBeer=1000;
        setTimeout(()=>{
            if(money< priceofBeer){
                console.log('drink beer');
                resolve( beer -1000)
            }
            reject('dont money go home')

        },1500)
    })
}
function goToHome(road){
    return new Promise((resolve, reject) => {
        const moneyonBeer = 500;
        setTimeout(()=>{
            if (moneyonBeer > -500) {
                console.log('go home')
                resolve(road -100)
            }
            reject('non stop ')

        },1000)
    })

}

async function Byday() {
    try {
        await dayByday(300)
        await morningProcedures(true);
        await breakFast(false);
        await goWork(true);
        await buyBread(150)
        await clearHouse(20);
        await goTotraine(1000);
        await fridayDrinkBeer(1000);
        await goToHome(true);
    } catch (err) {
        console.error(err);
    } finally {
        console.log('finally')
    }

}
Byday()