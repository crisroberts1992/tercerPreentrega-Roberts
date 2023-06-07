const socket = io()

const armarListadoUsuarios = Handlebars.compile(`
{{#if hayUsuarios}}
<ul>
    {{#each usuarios}}
    <li>Nombre: {{this.first_name}} |Apellido: {{this.last_name}} |Edad: {{this.age}} |Email: {{this.email}}</li>
    {{/each}}
</ul>
{{else}}
<p>no hay usuarios para mostrar</p>
{{/if}}
`)

socket.on('users', usuarios => {
    const hayUsuarios = usuarios.length > 0
    // alert('recibi los usuarios: ' + JSON.stringify(usuarios[usuarios.length - 1]))
    const divLlistado = document.querySelector('#listadoUsuarios')
    if (divLlistado instanceof HTMLDivElement) {
        const html = armarListadoUsuarios({
            usuarios,
            hayUsuarios
        })
        divLlistado.innerHTML = html
    }
})