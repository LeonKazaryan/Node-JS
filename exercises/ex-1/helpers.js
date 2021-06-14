CreateNormalDate = (timestemp) => {
    return new Intl.DateTimeFormat('ru-RU', {
        day:"2-digit",
        month:"2-digit",
        year:"numeric"
    }).format(timestemp)
}

module.exports = {
    CreateNormalDate
}