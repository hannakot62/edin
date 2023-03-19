export function getTodosFromLS() {
    if (localStorage.getItem('todos')) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return JSON.parse(localStorage.getItem('todos'))
    } else return []
}
