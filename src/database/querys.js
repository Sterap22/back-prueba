export const querys = {
    getInicioSession:'select*from  dbo.usuario where correo = @user and clave = @clave',
    getValidarUsuario:'select*from dbo.usuario where correo = @user',
    getComentario:'SELECT C.comentario, U.correo FROM commentUser C, usuario U WHERE C.idUsuario = U.id',
    postRegistrarComentario:'insert into commentUser(comentario,idUsuario) values(@comment, @idUsuario)',
}