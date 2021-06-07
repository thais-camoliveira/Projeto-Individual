create database TLOF;
use TLOF;

create table Usuario (
idUsuario int primary key auto_increment,
nomeUsuario varchar(50),
login varchar(40),
senha varchar(25)
);

select * from Usuario;

create table comentario (
id int primary key auto_increment ,
descricao varchar (600),
fkUsuario int,
foreign key (fkUsuario) references Usuario (idUsuario)
);

create table Enquete (
idEnquete int primary key auto_increment,
idadeUser int,
genero varchar(15),
check (genero = "Feminino" or genero = "Masculino" or genero = "Não-binário"),
jogou char(3),
check (jogou = "Sim" or jogou = "Não"),
assistiu char(3),
check (assistiu = "Sim" or assistiu = "Não"),
gostou char(3),
check (gostou = "Sim" or gostou = "Não"),
personagemFav varchar(5),
check (personagemFav = "Abby" or personagemFav = "Ellie"),
melhorJogo char(1),
check (melhorJogo = "1" or melhorJogo = "2")
);

create table user_enq (
fk_Usuario int,
foreign key (fk_Usuario) references Usuario (idUsuario),
fkEnquete int,
foreign key (fkEnquete) references Enquete (idEnquete),
primary key (fk_Usuario, fkEnquete)
);

select sum(personagemFav = 'Abby') from enquete where genero = 'Masculino';
select sum(personagemFav = 'Ellie') from enquete where genero = 'Masculino';

select sum(personagemFav = 'Abby')Abby, sum(personagemFav = 'Ellie')Ellie from enquete where genero = 'Masculino';
select sum(personagemFav = 'Abby')Abby2, sum(personagemFav = 'Ellie')Ellie2 from enquete where genero = 'Feminino';
select sum(personagemFav = 'Abby'), sum(personagemFav = 'Ellie') from enquete where genero = 'Não-binário';

select sum(personagemFav = 'Ellie') from enquete where genero = 'Masculino';

select sum(genero = 'Masculino')Masculino, sum(genero = 'Feminino')Feminino, sum(genero = 'Não-binário')NaoBinario from enquete;
