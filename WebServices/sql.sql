/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Author:  sombiniaina
 * Created: Jan 16, 2022
 */
CREATE DATABASE signalementproblemes;
CREATE ROLE admin_signalementproblemes LOGIN password '123456';
ALTER DATABASE signalementproblemes OWNER TO admin_signalementproblemes;

psql -U admin_signalementproblemes signalementproblemes
123456

create sequence region_seq;
create table region (
    idRegion varchar default 'REG'|| nextval('region_seq'),
    nomRegion varchar not null unique,
    primary key (idRegion)
);

create sequence utilisateur_seq;
create table utilisateur (
    idUtilisateur varchar default 'UTI'|| nextval('utilisateur_seq'),
    nomUtilisateur varchar not null,
    motDePasse varchar not null,
    role varchar not null,
    idRegion varchar references region(idRegion),
    primary key (idUtilisateur)
);

create sequence typesignalement_seq;
create table typesignalement (
    idTypeSignalement varchar default 'TSI'|| nextval('typesignalement_seq'),
    libelleTypeSignalement varchar not null,
    primary key (idTypeSignalement)
);

create sequence signalement_seq;
create table signalement (
    idSignalement varchar default 'SIG'|| nextval('signalement_seq'),
    description varchar not null,
    dateSignalement timestamp default current_timestamp,
    dateDebutConstruction timestamp,
    dateFinConstruction timestamp,    
    idUtilisateur varchar not null references utilisateur(idUtilisateur),
    idTypeSignalement varchar not null references typesignalement(idTypeSignalement),
    idRegion varchar references region(idRegion),
    primary key (idSignalement)
);

insert into region (nomRegion) values ('Analamanga');

insert into typesignalement(libelleTypeSignalement) values ('Route abimee'), ('ordures'), ('Accident');

insert into utilisateur (nomUtilisateur, motDePasse, role, idRegion) values ('Admin Analamanga', '123456', 'admin', 'REG1');

insert into utilisateur (nomUtilisateur, motDePasse, role) values ('utilisateur', '123456', 'utilisateur');


create view stat_nbsignalement_region as 
select r.nomRegion, coalesce(stat.nombre, 0) nombre from region r natural left join (select idregion, count(*) nombre from signalement where idregion is not null group by idregion) stat;