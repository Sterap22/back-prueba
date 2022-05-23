export const querys = {
    getInicioSession:'select*from  dbo.usuario where correo = @user and clave = @clave',
    getProductos:'SELECT imagenes,titulo,descripcion FROM [dbo].[productoSlide]',
    postProducto:'INSERT INTO [dbo].[productoSlide]([titulo],[descripcion],[imagenes])VALUES(@titulo,@descripcion,@imagenes)',
}