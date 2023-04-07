
// Impede que o evento do formulário seja ativado.
const submitBtn = document.getElementById('submit-form');

submitBtn.addEventListener('click', function(e){
    e.preventDefault();
})

function registerAnimal() { // Esta função, quando acionada no botão "Cadastrar", pega todos os valores dos Inputs e guarda nas variáveis criadas.
    const tutorsName = document.getElementById('tutorsName').value; // Essa variável armazena o nome do tutor
    const tutorsEmail = document.getElementById('tutorsEmail').value; // Essa variável armazena o e-mail do tutor
    const tutorsPhone = document.getElementById('tutorsPhone').value; // Essa variável armazena o telefone do tutor
    const animalName = document.getElementById('animalName').value; // Essa variável armazena o nome do animal
    const animalAge = document.getElementById('animalAge').value; // Essa variável armazena a idade do animal
    const animalKilo = document.getElementById('animalKilo').value; // Essa variável armazena o quilo do animal
    const animalGender = document.getElementById('animalGender').value; // Essa variável armazena o sexo do animal
    const selectService = document.getElementById('selectService'); // Essa variável armazena o serviço desejado pelo tutor
    const selectServiceOption = selectService.options[selectService.selectedIndex].value; // Essa variável armazena a opção do serviço desejado pelo tutor
    const emergencyLevel = document.getElementById('emergencyLevel').value; // Essa variável armazena o nível de emergência do atendimento.

    const animalInformation = document.createElement('div'); // Essa variável vai criar uma "DIV" quando houver as informações do Animal e do tutor
    animalInformation.className = 'animal-informations'; // Essa variável adiciona a classe na DIV criada acima
    
    const animalData = document.createElement('p'); // Essa variável cria um parágrafo, aonde serão adicionadas as informações.

    animalData.innerText = `Nome do tutor: ${tutorsName} | E-mail do tutor: ${tutorsEmail} | Telefone do Tutor: ${tutorsPhone} | Nome do animal: ${animalName} | Idade do animal: ${animalAge} | Peso do animal: ${animalKilo} | Sexo do animal: ${animalGender} | Serviço desejado: ${selectServiceOption} | Nível de Emergência: ${emergencyLevel}`; // Este método adicionará um texto com todos os valores informados no cadastro.
    
    animalInformation.appendChild(animalData); // Aqui vamos adicionar o parágrafo dentro da Div.
    
    const registeredAnimals = document.getElementById('registered-animals'); // Essa variável armazena o ID do registro de animais.
    registeredAnimals.appendChild(animalInformation); // Aqui vamos adicionar as informações dentro da DIV Pai "registeredAnimals";
};

