angular.module("meuModulo").controller("indexController", function ($scope) {

	$scope.titulo = "Sistema com Angular JS";

	$scope.alunos = [
		{ nome: "Camila", email: "camila@mail.com", nota1: 65, nota2: 80, nota3: 55 },
		{ nome: "Pedro", email: "pedro@mail.com", nota1: 75, nota2: 80, nota3: 55 },
		{ nome: "Murilo", email: "murilo@mail.com", nota1: 65, nota2: 60, nota3: 55 },
		{ nome: "João", email: "joao@mail.com", nota1: 95, nota2: 80, nota3: 55 },
		{ nome: "Ana", email: "ana@mail.com", nota1: 65, nota2: 30, nota3: 55 }
	];

	var init = function () {
		$scope.alunos.forEach(function (aluno) {
			aluno.media = calculaMedia(aluno);
		});
		limpaForm();
	};

	var contador = 0;
	var calculaMedia = function (aluno) {
		var media = (parseFloat(aluno.nota1) + parseFloat(aluno.nota2) + parseFloat(aluno.nota3)) / 3;
		return media.toFixed(2);
	};

	$scope.abreAddAluno = function () {
		$scope.editando = false;
		limpaForm();
		$('#modal1').openModal();
	};

	$scope.addAluno = function (aluno) {
		aluno.media = calculaMedia(aluno);
		$scope.alunos.push(aluno);
		$('#modal1').closeModal();
		limpaForm();
	};

	var alunoEdicao;
	$scope.editarAluno = function (aluno) {
		$scope.editando = true;
		angular.copy(aluno, $scope.Aluno);
		$('#modal1').openModal();
		alunoEdicao = aluno;
	};

	$scope.salvarAluno = function (aluno) {
		alunoEdicao.nome = aluno.nome;
		alunoEdicao.email = aluno.email;
		alunoEdicao.nota1 = aluno.nota1;
		alunoEdicao.nota2 = aluno.nota2;
		alunoEdicao.nota3 = aluno.nota3;
		alunoEdicao.media = calculaMedia(aluno);
		$('#modal1').closeModal();
	};

	$scope.deletarAluno = function (aluno) {
		for (var index in $scope.alunos) {
			var alunoAtual = $scope.alunos[index];
			if (aluno === alunoAtual) {
				$scope.alunos.splice(index, 1);
			}
		}
	};

	var limpaForm = function () {
		$scope.Aluno = { nome: "", email: "", nota1: '', nota2: '', nota3: '', media: '' };
	};

	init();

})