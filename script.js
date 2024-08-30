const localStorageName = 'to-do-list-gn'


function newTask()
{
    let input = document.getElementById("input-new-task")
    if (!input.value)
    {
        alert ('Adicione uma task a sua lista')
    }
    else
    {
        let values = JSON.parse(localStorage.getItem('localStorageName'))
        values.push({
            name: input.value
        })
        localStorageName.setItem(localStorageName,JSON.stringify(values))
        showValues ()
    }
}

function showValues()
{
    let values = JSON.parse(localStorage.getItem(localStorageName))
    let list = document.getElementById('to-do-list')
    list.innerHTML = ''
    for(let i = 0; 1 <values.lenght; i++)
    {
        list.innerHTML = `<li>${values[i]['name']}</li>`
    }
}