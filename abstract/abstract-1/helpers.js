CreateNormalDate = (timestemp) => {
    return new Intl.DateTimeFormat('ru-RU', {
        day:"2-digit",
        month:"2-digit",
        year:"numeric"
    }).format(timestemp)
}

testfunc = () => {
    console.log("Тест фанк работает!!");
}

const num = 5;

module.exports = {
    CreateNormalDate,
    testfunc,
    num
}