import React from 'react';

const Login = () => {
    return (
        <div className='container mt-3'>
            <h3 className='center-this'>Ingrese su Usuario y Contraseña</h3>
                <label for="user" className='center-this mt-3'>Usuario:</label><br></br>
                <select id="user" className='center-this p-2'>
                  <option value="t1">Meruf Valenzuela</option>
                  <option value="t2">Alvarez Mario</option>
                  <option value="t3">Rosas Walter</option>
                  <option value="t4">Moreno </option>
                  <option value="t5">Bedis Facundo</option>
                  <option value="t6">Dario Ainol</option>
                  <option value="t7">Matias Hetchenleitner</option>
                  <option value="t8">Bustamante Jorge</option>
                  <option value="t9">Bustamante Carlos</option>
                  <option value="t10">Juan Harrislur</option>
                  <option value="admin">Administrador</option>
                  <option value="guest">Invitado</option>

                </select><br></br>
                <label for="password" className='center-this mt-3'>Contraseña:</label><br></br>
                <input type="password" className='center-this p-2'></input><br></br>

                <button className='btn btn-primary center-this mt-3'>Ingresar</button><br></br>

                <input type="checkbox" className='center-this p-2'></input>
                <label for="check" className='center-this' checked="checked">Mantener sesion en este dispositivo</label>
                </div>
    );
}

export default Login;
