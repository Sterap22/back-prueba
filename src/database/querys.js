export const querys = {
    getInfoUser: 'select * from InfoUSer where id=1',
    getInicioSession:'select id,nombre,apellido,tipoId,identificacion,correo,contraseña,telefono,tipoUser from dbo.InfoUser where correo = @user and contraseña = @pass and estado = 1',
    getPlantilla:'SELECT * FROM mail WHERE id = @id', 
    postRegisterUser:'INSERT INTO InfoUser([nombre],[apellido],[tipoId],[identificacion],[correo],[contraseña],[telefono],[estado],[tipoUser]) VALUES(@name,@lastName,@typeId,@nit,@mail,@pass,@numPhone,1,@userType)',
    postCode:'DECLARE @usuario int SELECT @usuario = id FROM InfoUser where correo = @correo INSERT INTO autentication VALUES (@code,@CreateDate,@usuario,1)',
    getServices: 'select * from serviceMuv',
    PostServices: 'INSERT INTO serviceMuv ([nameService],[Origen],[Destino],[horaservicio],[assistant],[Inventory],[pack],[unpack],[valor],[idconductor],[vigente],[idUser]) VALUES (@nameService,@Origen,@Destino,@horaservicio,@assistant,@Inventory,@pack,@unpack,@valor,@idconductor,@vigente,@idUser) '
}