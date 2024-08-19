      //decimal - binario
      // Adiciona um evento de listener ao documento para quando o conteúdo for carregado
      document.addEventListener("DOMContentLoaded", function() {
        // Seleciona os elementos HTML necessários
        const inputTxt = document.getElementById('input-txt'); // Input de texto
        const binaryInput = document.getElementById('bin-inp'); // Input de saída binária
        const btnConverter = document.getElementById('btn-converter'); // Botão de conversão
        const btnLimpar = document.getElementById('btn-limpar'); // Botão de limpeza
      
        // Adiciona eventos de click aos botões
        btnConverter.addEventListener('click', converterParaBinario); // Chama a função de conversão quando o botão é clicado
        btnLimpar.addEventListener('click', limpar); // Chama a função de limpeza quando o botão é clicado
      
        // Função de conversão de texto para binário
        function converterParaBinario() {
          // Obtém o valor do input de texto
          let inputValue = inputTxt.value;
          // Chama a função de conversão para binário e armazena o resultado
          let binaryValue = convertToBinary(inputValue);
          // Atualiza o input de saída binária com o resultado
          binaryInput.value = binaryValue;
        }
      
        // Função de conversão de texto para binário
        function convertToBinary(inputValue) {
          // Inicializa variáveis para armazenar o valor binário e o número atual
          let binaryValue = '';
          let numero = '';
          // Percorre cada caractere do input de texto
          for (let i = 0; i < inputValue.length; i++) {
            let char = inputValue[i];
            // Verifica se o caractere é um número
            if (!isNaN(char)) {
              // Adiciona o caractere ao número atual
              numero += char;
            } else {
              // Se o caractere não é um número, converte o número atual para binário e adiciona ao resultado
              if (numero !== '') {
                binaryValue += parseInt(numero).toString(2) + ' ';
                numero = '';
              }
              // Converte o caractere para código ASCII e adiciona ao resultado
              let charCode = char.charCodeAt(0);
              binaryValue += charCode.toString(2).padStart(8, '0') + ' ';
            }
          }
          // Converte o número atual para binário e adiciona ao resultado, se necessário
          if (numero !== '') {
            binaryValue += parseInt(numero).toString(2) + ' ';
          }
          // Retorna o resultado, removendo espaços extras
          return binaryValue.trim();
        }
      
        //binario - decimal
      // Seleciona o botão de conversão de binário para decimal
      const btnConverter1 = document.getElementById('btn-converter1');
      
      // Adiciona um evento de click ao botão
      btnConverter1.addEventListener('click', converterBinarioParaDecimal);
      
      // Função de conversão de binário para decimal
      function converterBinarioParaDecimal() {
        // Obtém o valor do input de texto
        let inputValue = document.getElementById('input-txt').value;
        
        // Chama a função de conversão de binário para decimal e armazena o resultado
        let decimalValue = binaryToDecimal(inputValue);
        
        // Atualiza o input de saída binária com o resultado
        document.getElementById('bin-inp').value = decimalValue;
      }
      
      // Função de conversão de binário para decimal
      function binaryToDecimal(binaryValue) {
        // Remove espaços do valor binário
        binaryValue = binaryValue.replace(/\s+/g, '');
        
        // Converte o valor binário para decimal
        let decimalValue = parseInt(binaryValue, 2);
        
        // Retorna o valor decimal
        return decimalValue;
      }
      
        // Função de limpeza
        function limpar() {
          // Limpa os inputs de texto e binário
          inputTxt.value = '';
          binaryInput.value = '';
        }
      });
      
      
      // binario - octal
      // Adiciona um evento de listener ao documento para quando o conteúdo for carregado
      document.addEventListener("DOMContentLoaded", function() {
        // Seleciona os elementos HTML necessários
        const inputTxtDup = document.getElementById('input-txt-dup'); // Input de texto duplicado
        const octalInput = document.getElementById('bin-inp-dup'); // Input de saída octal
        const btnConverterDup = document.getElementById('btn-converter-dup'); // Botão de conversão duplicado
        const btnLimparDup = document.getElementById('btn-limpar-dup'); // Botão de limpeza duplicado
      
        // Adiciona eventos de click aos botões
        btnConverterDup.addEventListener('click', converterParaOctal); // Chama a função de conversão quando o botão é clicado
        btnLimparDup.addEventListener('click', limparDup); // Chama a função de limpeza quando o botão é clicado
      
        // Função de conversão de binário para octal
        function converterParaOctal() {
          // Obtém o valor do input de texto duplicado
          let inputValue = inputTxtDup.value;
          // Chama a função de conversão para binário e armazena o resultado
          let binaryValue = convertToBinary(inputValue);
          // Chama a função de conversão de binário para octal e armazena o resultado
          let octalValue = binaryToOctal(binaryValue);
          // Atualiza o input de saída octal com o resultado
          octalInput.value = octalValue;
        }
      
        // Função de conversão de texto para binário
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
      
        // Função de conversão de binário para octal
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
        //octal - binario
        // Função de conversão de octal para binário
      function octalToBinary(octalValue) {
        let binaryValue = '';
        for (let i = 0; i < octalValue.length; i++) {
          let octalDigit = octalValue[i];
          let binaryDigit = parseInt(octalDigit, 8).toString(2).padStart(3, '0');
          binaryValue += binaryDigit;
        }
        return binaryValue;
      }
      
      // Adiciona um evento de click ao botão de conversão de octal para binário
      document.getElementById('btn-converter-dup1').addEventListener('click', converterOctalParaBinario);
      
      // Função de conversão de octal para binário
      function converterOctalParaBinario() {
        // Obtém o valor do input de texto duplicado
        let inputValue = document.getElementById('input-txt-dup').value;
        // Chama a função de conversão de octal para binário e armazena o resultado
        let binaryValue = octalToBinary(inputValue);
        // Atualiza o input de saída binária com o resultado
        document.getElementById('bin-inp-dup').value = binaryValue;
      }
      
        // Função de limpeza
        function limparDup() {
          // Limpa os inputs de texto e octal
          inputTxtDup.value = '';
          octalInput.value = '';
        }
      });
      
      // Binário - hexadecimal
      // Adiciona um evento de listener ao documento para quando o conteúdo for carregado
      document.addEventListener("DOMContentLoaded", function() {
        // Seleciona os elementos HTML necessários
        const inputTxtTrip = document.getElementById('input-txt-trip'); // Input de texto triplicado
        const hexInput = document.getElementById('bin-inp-trip'); // Input de saída hexadecimal
        const btnConverterTrip = document.getElementById('btn-converter-trip'); // Botão de conversão triplicado
        const btnLimparTrip = document.getElementById('btn-limpar-trip'); // Botão de limpeza triplicado
      
        // Adiciona eventos de click aos botões
        btnConverterTrip.addEventListener('click', converterParaHexadecimal); // Chama a função de conversão quando o botão é clicado
        btnLimparTrip.addEventListener('click', limparTrip); // Chama a função de limpeza quando o botão é clicado
      
        // Função de conversão de binário para hexadecimal
        function converterParaHexadecimal() {
          // Obtém o valor do input de texto triplicado
          let inputValue = inputTxtTrip.value;
          // Chama a função de conversão para binário e armazena o resultado
          let binaryValue = convertToBinary(inputValue);
          // Chama a função de conversão de binário para hexadecimal e armazena o resultado
          let hexValue = binaryToHexadecimal(binaryValue);
          // Atualiza o input de saída hexadecimal com o resultado
          hexInput.value = hexValue;
        }
      
        // Função de conversão de texto para binário
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
      
        // Função de conversão de binário para hexadecimal
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
        //hexadecimal - binário
        // Função de conversão de hexadecimal para binário
      function hexToBinary(hexValue) {
        let binaryValue = '';
        for (let i = 0; i < hexValue.length; i++) {
          let hexDigit = hexValue[i];
          let binaryDigit = parseInt(hexDigit, 16).toString(2).padStart(4, '0');
          binaryValue += binaryDigit;
        }
        return binaryValue;
      }
      
      // Adiciona um evento de click ao botão de conversão de hexadecimal para binário
      document.getElementById('btn-converter-trip1').addEventListener('click', converterHexadecimalParaBinario);
      
      // Função de conversão de hexadecimal para binário
      function converterHexadecimalParaBinario() {
        // Obtém o valor do input de texto triplicado
        let inputValue = document.getElementById('input-txt-trip').value;
        // Chama a função de conversão de hexadecimal para binário e armazena o resultado
        let binaryValue = hexToBinary(inputValue);
        // Atualiza o input de saída binária com o resultado
        document.getElementById('bin-inp-trip').value = binaryValue;
      }
      
        // Função de limpeza
        function limparTrip() {
          // Limpa os inputs de texto e hexadecimal
          inputTxtTrip.value = '';
          hexInput.value = '';
        }
      });
      //efeito dos forms
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
      
      