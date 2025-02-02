import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Resultado from './Resultado';
import { operaciones } from '../helpers/operaciones';

const NumberInput = props => {
  const [numeros, setnumeros] = useState({
    numero1: 0,
    numero2: 0,
  });

  const { handleChange, suma, multiplicacion, division, resta, numero1, numero2 } = operaciones(numeros, setnumeros);

  return (
    <>
      <label htmlFor="">Numero 1:
        <input name='numero1' value={numero1} onChange={handleChange} type='number' />
      </label>
      <br />
      <label htmlFor="">Numero 2:
        <input name='numero2' value={numero2} onChange={handleChange} type='number' />
      </label>
      <br />
      {/* Mostramos los resultados para cada operación */}
      <Resultado operacion="Suma" calculo={suma()} />
      <Resultado operacion="Multiplicación" calculo={multiplicacion()} />
      <Resultado operacion="División" calculo={division()} />
      <Resultado operacion="Resta" calculo={resta()} />
    </>
  );
};

NumberInput.propTypes = {
  name: PropTypes.string,
};

export default NumberInput;
