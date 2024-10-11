export const operaciones = (numeros, setnumeros) => {
    const { numero1, numero2 } = numeros;
  
    
    const handleChange = (e) => {
      setnumeros({
        ...numeros,
        [e.target.name]: parseFloat(e.target.value)
      });
    }
  
    
    const suma = () => numero1 + numero2;
    const multiplicacion = () => numero1 * numero2;
    const division = () =>  numero1 / numero2; 
    const resta = () => numero1 - numero2;
  
    
    return { handleChange, suma, multiplicacion, division, resta, numero1, numero2 };
  };
