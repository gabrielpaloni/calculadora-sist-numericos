document.addEventListener("DOMContentLoaded", function() {
  const inputTxt = document.getElementById('input-txt');
  const binaryInput = document.getElementById('bin-inp');
  const btnConverter = document.getElementById('btn-converter');
  const btnLimpar = document.getElementById('btn-limpar');

  btnConverter.addEventListener('click', converterParaBinario);
  btnLimpar.addEventListener('click', limpar);

  function converterParaBinario() {
      let inputValue = inputTxt.value;
      let binaryValue = convertToBinary(inputValue);
      binaryInput.value = binaryValue;
  }

  function convertToBinary(inputValue) {
      let binaryValue = '';
      let numero = '';
      for (let i = 0; i < inputValue.length; i++) {
          let char = inputValue[i];
          if (!isNaN(char)) {
              numero += char;
          } else {
              if (numero !== '') {
                  binaryValue += parseInt(numero).toString(2) + ' ';
                  numero = '';
              }
              let charCode = char.charCodeAt(0);
              binaryValue += charCode.toString(2).padStart(8, '0') + ' ';
          }
      }
      if (numero !== '') {
          binaryValue += parseInt(numero).toString(2) + ' ';
      }
      return binaryValue.trim();
  }

  const btnConverter1 = document.getElementById('btn-converter1');
  btnConverter1.addEventListener('click', converterBinarioParaDecimal);

  function converterBinarioParaDecimal() {
      let inputValue = document.getElementById('input-txt').value;
      let decimalValue = binaryToDecimal(inputValue);
      document.getElementById('bin-inp').value = decimalValue;
  }

  function binaryToDecimal(binaryValue) {
      binaryValue = binaryValue.replace(/\s+/g, '');
      let decimalValue = parseInt(binaryValue, 2);
      return decimalValue;
  }

  function limpar() {
      inputTxt.value = '';
      binaryInput.value = '';
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const inputTxtDup = document.getElementById('input-txt-dup');
  const octalInput = document.getElementById('bin-inp-dup');
  const btnConverterDup = document.getElementById('btn-converter-dup');
  const btnLimparDup = document.getElementById('btn-limpar-dup');

  btnConverterDup.addEventListener('click', converterParaOctal);
  btnLimparDup.addEventListener('click', limparDup);

  function converterParaOctal() {
      let inputValue = inputTxtDup.value;
      let binaryValue = convertToBinary(inputValue);
      let octalValue = binaryToOctal(binaryValue);
      octalInput.value = octalValue;
  }

  function convertToBinary(inputValue) {
      let binaryValue = '';
      for (let i = 0; i < inputValue.length; i++) {
          let char = inputValue[i];
          if (!isNaN(char)) {
              binaryValue += parseInt(char).toString(2);
          } else {
              let charCode = char.charCodeAt(0);
              binaryValue += charCode.toString(2).padStart(8, '0');
          }
      }
      return binaryValue;
  }

  function binaryToOctal(binaryValue) {
      let octalValue = '';
      while (binaryValue.length % 3 !== 0) {
          binaryValue = '0' + binaryValue;
      }
      for (let i = 0; i < binaryValue.length; i += 3) {
          let octet = binaryValue.substring(i, i + 3);
          let decimal = parseInt(octet, 2);
          let octal = decimal.toString(8);
          octalValue += octal;
      }
      return octalValue;
  }

  function octalToBinary(octalValue) {
      let binaryValue = '';
      for (let i = 0; i < octalValue.length; i++) {
          let octalDigit = octalValue[i];
          let binaryDigit = parseInt(octalDigit, 8).toString(2).padStart(3, '0');
          binaryValue += binaryDigit;
      }
      return binaryValue;
  }

  document.getElementById('btn-converter-dup1').addEventListener('click', converterOctalParaBinario);

  function converterOctalParaBinario() {
      let inputValue = document.getElementById('input-txt-dup').value;
      let binaryValue = octalToBinary(inputValue);
      document.getElementById('bin-inp-dup').value = binaryValue;
  }

  function limparDup() {
      inputTxtDup.value = '';
      octalInput.value = '';
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const inputTxtTrip = document.getElementById('input-txt-trip');
  const hexInput = document.getElementById('bin-inp-trip');
  const btnConverterTrip = document.getElementById('btn-converter-trip');
  const btnLimparTrip = document.getElementById('btn-limpar-trip');

  btnConverterTrip.addEventListener('click', converterParaHexadecimal);
  btnLimparTrip.addEventListener('click', limparTrip);

  function converterParaHexadecimal() {
      let inputValue = inputTxtTrip.value;
      let binaryValue = convertToBinary(inputValue);
      let hexValue = binaryToHexadecimal(binaryValue);
      hexInput.value = hexValue;
  }

  function convertToBinary(inputValue) {
      let binaryValue = '';
      for (let i = 0; i < inputValue.length; i++) {
          let char = inputValue[i];
          if (!isNaN(char)) {
              binaryValue += parseInt(char).toString(2);
          } else {
              let charCode = char.charCodeAt(0);
              binaryValue += charCode.toString(2).padStart(8, '0');
          }
      }
      return binaryValue;
  }

  function binaryToHexadecimal(binaryValue) {
      let hexValue = '';
      while (binaryValue.length % 4 !== 0) {
          binaryValue = '0' + binaryValue;
      }
      for (let i = 0; i < binaryValue.length; i += 4) {
          let nibble = binaryValue.substring(i, i + 4);
          let decimal = parseInt(nibble, 2);
          let hex = decimal.toString(16).toUpperCase();
          hexValue += hex;
      }
      return hexValue;
  }

  function hexToBinary(hexValue) {
      let binaryValue = '';
      for (let i = 0; i < hexValue.length; i++) {
          let hexDigit = hexValue[i];
          let binaryDigit = parseInt(hexDigit, 16).toString(2).padStart(4, '0');
          binaryValue += binaryDigit;
      }
      return binaryValue;
  }

  document.getElementById('btn-converter-trip1').addEventListener('click', converterHexadecimalParaBinario);

  function converterHexadecimalParaBinario() {
      let inputValue = document.getElementById('input-txt-trip').value;
      let binaryValue = hexToBinary(inputValue);
      document.getElementById('bin-inp-trip').value = binaryValue;
  }

  function limparTrip() {
      inputTxtTrip.value = '';
      hexInput.value = '';
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const forms = document.querySelectorAll('.form-container form');

  forms.forEach(form => {
      form.addEventListener('mouseover', () => {
          forms.forEach(otherForm => {
              if (otherForm !== form) {
                  otherForm.style.opacity = 0.5;
              }
          });
      });

      form.addEventListener('mouseout', () => {
          forms.forEach(otherForm => {
              otherForm.style.opacity = 1;
          });
      });
  });
});