
--USER
INSERT INTO USER (ID, USERNAME,FIRSTNAME,LASTNAME,PASSWORD,EMAIL) VALUES (1, 'ANTONIOTEST', 'Antonio', 'Redondo', 'PASSWORDTEST','ANTONIO@GMAIL.COM');
INSERT INTO USER (ID, USERNAME,FIRSTNAME,LASTNAME,PASSWORD,EMAIL) VALUES (2, 'HAROONTEST', 'Haroon', 'Subair', 'PASSWORDTESTHAROON','HAROON@GMAIL.COM');


--PROPERTY
INSERT INTO PROPERTY (PROPERTY_ID, NAME,ADDRESS,CITY,IMAGE) VALUES (1, 'Index Tower', 'DIFC', 'Dubai', 'PropertyImage');
INSERT INTO PROPERTY (PROPERTY_ID, NAME,ADDRESS,CITY,IMAGE) VALUES (2, 'Indigo Tower', 'JLT Cluster D', 'Dubai', 'PropertyImage');
INSERT INTO PROPERTY (PROPERTY_ID, NAME,ADDRESS,CITY,IMAGE) VALUES (3, 'Palladium Tower', 'JLT Cluster C', 'Dubai', 'PropertyImage');
INSERT INTO PROPERTY (PROPERTY_ID, NAME,ADDRESS,CITY,IMAGE) VALUES (4, 'Goldcrest Tower', 'JLT Cluster H', 'Dubai', 'PropertyImage');


--TASK
INSERT INTO TASK (TASK_ID, DATE_FROM,DATE_TO,REMARKS,IMAGE,NAME) VALUES (1, to_date('20170604','YYYYMMDD'), to_date('20170705','YYYYMMDD'), 'Task Remarks', 'TaskImage','Cleaning Facade');
INSERT INTO TASK (TASK_ID, DATE_FROM,DATE_TO,REMARKS,IMAGE,NAME) VALUES (2, to_date('20170607','YYYYMMDD'), to_date('20170708','YYYYMMDD'), 'Task Remarks2', 'TaskImage','Watering Plants');
INSERT INTO TASK (TASK_ID, DATE_FROM,DATE_TO,REMARKS,IMAGE,NAME) VALUES (3, to_date('20170608','YYYYMMDD'), to_date('20170709','YYYYMMDD'), 'Task Remarks3', 'TaskImage','Washing the floor');



--EMPLOYEE
INSERT INTO EMPLOYEE (ID, NAME,EMAIL,TELEPHONE,ADDRESS,REMARKS,CITY,AGE,IMAGE,PROPERTY_ID,TASK_ID) VALUES (2, 'Jessica Vasco', 'Jessica@gmail.com', '971451777139', 'JLT Palladium Tower','Jessica remarks', 'London', 22, 'image', 1,3);
INSERT INTO EMPLOYEE (ID, NAME,EMAIL,TELEPHONE,ADDRESS,REMARKS,CITY,AGE,IMAGE,PROPERTY_ID,TASK_ID) VALUES (3, 'Barrett Milner', 'Barrett@gmail.com', '971333587231', 'Deira Street','Barrett remarks', 'Paris', 51, 'image', 2,1);
INSERT INTO EMPLOYEE (ID, NAME,EMAIL,TELEPHONE,ADDRESS,REMARKS,CITY,AGE,IMAGE,PROPERTY_ID,TASK_ID) VALUES (4, 'Brody Smith', 'Brody@gmail.com', '971551769326', 'Dubai Creek','Brody remarks', 'Manchester', 17, 'image', 3,2);
INSERT INTO EMPLOYEE (ID, NAME,EMAIL,TELEPHONE,ADDRESS,REMARKS,CITY,AGE,IMAGE,PROPERTY_ID,TASK_ID) VALUES (5, 'Vladimir', 'mi.Aliquam@Phasellus.net', '971487961321', 'JLT Cluster F Armada tower','Vladimir remarks', 'Cadiz', 17, 'image', 1,3);
INSERT INTO EMPLOYEE (ID, NAME,EMAIL,TELEPHONE,ADDRESS,REMARKS,CITY,AGE,IMAGE,PROPERTY_ID,TASK_ID) VALUES (6, 'Maggy', 'ligula@acorciUt.edu', '971502134247', 'Mirdiff','Maggy remarks', 'Brussels', 17, 'image', 4,1);
INSERT INTO EMPLOYEE (ID, NAME,EMAIL,TELEPHONE,ADDRESS,REMARKS,CITY,AGE,IMAGE,PROPERTY_ID,TASK_ID) VALUES (7, 'Jesus Redondo', 'jesus@gmail.com', '971501844741', 'JBR Sadaf8','Jesus remarks', 'Malaga', 33, 'image', 2,1);
INSERT INTO EMPLOYEE (ID, NAME,EMAIL,TELEPHONE,ADDRESS,REMARKS,CITY,AGE,IMAGE,PROPERTY_ID,TASK_ID) VALUES (8, 'Unity', 'Nunc.commodo@justo.org', '971501844747', 'JBR Sadaf7','Unity remarks', 'Amsterdam', 34, 'image', 1,1);
INSERT INTO EMPLOYEE (ID, NAME,EMAIL,TELEPHONE,ADDRESS,REMARKS,CITY,AGE,IMAGE,PROPERTY_ID,TASK_ID) VALUES (9, 'Ralph', 'augue@penatibuset.net', '971501844749', 'JBR Sadaf6','Ralph remarks', 'Baghdad ', 12, 'image', 3,3);
INSERT INTO EMPLOYEE (ID, NAME,EMAIL,TELEPHONE,ADDRESS,REMARKS,CITY,AGE,IMAGE,PROPERTY_ID,TASK_ID) VALUES (10, 'Medge', 'sagittis.augue@taciti.edu', '971444785210', 'JBR Sadaf5','Medge remarks', 'Baltimore', 19, 'image', 4,3);
INSERT INTO EMPLOYEE (ID, NAME,EMAIL,TELEPHONE,ADDRESS,REMARKS,CITY,AGE,IMAGE,PROPERTY_ID,TASK_ID) VALUES (11, 'Orli', 'nascetur@mipedenonummy.edu', '971450123546', 'JBR Sadaf4','Orli remarks', 'Barcelona', 39, 'image', 2,2);
INSERT INTO EMPLOYEE (ID, NAME,EMAIL,TELEPHONE,ADDRESS,REMARKS,CITY,AGE,IMAGE,PROPERTY_ID,TASK_ID) VALUES (12, 'Ainsley', 'morbi.tristique.senectus@enim.ca', '971450789471', 'JBR Sadaf3','Ainsley remarks', 'Casablanca', 49, 'image', 4,2);
INSERT INTO EMPLOYEE (ID, NAME,EMAIL,TELEPHONE,ADDRESS,REMARKS,CITY,AGE,IMAGE,PROPERTY_ID,TASK_ID) VALUES (13, 'Candice', 'turpis.non.enim@fringillami.com', '971450123547', 'JBR Sadaf3','Candice remarks', 'Barranquilla', 59, 'image', 2,3);
INSERT INTO EMPLOYEE (ID, NAME,EMAIL,TELEPHONE,ADDRESS,REMARKS,CITY,AGE,IMAGE,PROPERTY_ID,TASK_ID) VALUES (14, 'Alexis', 'lacinia.orci.consectetuer@dolorFuscefeugiat.ca', '971450123888', 'JBR 2','Alexis remarks', 'Berlin ', 11, 'image', 1,2);
INSERT INTO EMPLOYEE (ID, NAME,EMAIL,TELEPHONE,ADDRESS,REMARKS,CITY,AGE,IMAGE,PROPERTY_ID,TASK_ID) VALUES (15, 'Diana', 'pede.Cras@a.edu', '971450123577', 'JBR Sadaf2','Diana remarks', 'Palermo', 13, 'image', 3,2);
INSERT INTO EMPLOYEE (ID, NAME,EMAIL,TELEPHONE,ADDRESS,REMARKS,CITY,AGE,IMAGE,PROPERTY_ID,TASK_ID) VALUES (16, 'Tyrone', 'nascetur@mipedenonummy.edu', '971850369789', 'JBR Sadaf1','Tyrone remarks', 'Bellevue', 18, 'image', 2,3);
INSERT INTO EMPLOYEE (ID, NAME,EMAIL,TELEPHONE,ADDRESS,REMARKS,CITY,AGE,IMAGE,PROPERTY_ID,TASK_ID) VALUES (17, 'Brennan', 'scelerisque.lorem@enim.net', '971587474141', 'JBR Sadaf','Brennan remarks', 'Chongqing', 21, 'image', 2,2);
INSERT INTO EMPLOYEE (ID, NAME,EMAIL,TELEPHONE,ADDRESS,REMARKS,CITY,AGE,IMAGE,PROPERTY_ID,TASK_ID) VALUES (18, 'Lillith', 'non@lectus.edu', '971587474587', 'JLT Cluster E','Lillith remarks', 'Lillois-WitterzŽe', 18, 'image', 3,1);
INSERT INTO EMPLOYEE (ID, NAME,EMAIL,TELEPHONE,ADDRESS,REMARKS,CITY,AGE,IMAGE,PROPERTY_ID,TASK_ID) VALUES (19, 'Armando', 'Aliquam@orciin.net', '971587474142', 'JLT Cluster E','Armando remarks', 'Khanewal', 17, 'image', 4,3);
INSERT INTO EMPLOYEE (ID, NAME,EMAIL,TELEPHONE,ADDRESS,REMARKS,CITY,AGE,IMAGE,PROPERTY_ID,TASK_ID) VALUES (20, 'Justin', 'gravida.non.sollicitudin@placerataugue.edu', '971897587963', 'JLT Cluster F','Justin remarks', 'İslahiye', 26, 'image', 2,2);
INSERT INTO EMPLOYEE (ID, NAME,EMAIL,TELEPHONE,ADDRESS,REMARKS,CITY,AGE,IMAGE,PROPERTY_ID,TASK_ID) VALUES (21, 'Zorita', 'enim@risus.org', '971587474149', 'JLT Cluster G','Zorita remarks', 'Burdinne', 33, 'image', 3,2);
INSERT INTO EMPLOYEE (ID, NAME,EMAIL,TELEPHONE,ADDRESS,REMARKS,CITY,AGE,IMAGE,PROPERTY_ID,TASK_ID) VALUES (22, 'Mariam', 'purus.mauris.a@odiosagittis.ca', '971587474174', 'JLT Cluster H','Mariam remarks', 'Bharatpur', 31, 'image', 2,2);
INSERT INTO EMPLOYEE (ID, NAME,EMAIL,TELEPHONE,ADDRESS,REMARKS,CITY,AGE,IMAGE,PROPERTY_ID,TASK_ID) VALUES (23, 'Malik', 'Nam@enimEtiam.org', '971587474555', 'JLT Cluster I','Malik remarks', 'Neerheylissem', 25, 'image', 1,3);
INSERT INTO EMPLOYEE (ID, NAME,EMAIL,TELEPHONE,ADDRESS,REMARKS,CITY,AGE,IMAGE,PROPERTY_ID,TASK_ID) VALUES (24, 'Claire', 'sapien@Nullamlobortis.ca', '971587474666', 'JLT Cluster J','Claire remarks', 'San Fratello', 29, 'image', 3,1);
INSERT INTO EMPLOYEE (ID, NAME,EMAIL,TELEPHONE,ADDRESS,REMARKS,CITY,AGE,IMAGE,PROPERTY_ID,TASK_ID) VALUES (25, 'Hilel', 'tempor@purusmaurisa.edu', '971587474147', 'JLT Cluster K','Hilel remarks', 'La Cruz', 30, 'image', 4,1);
INSERT INTO EMPLOYEE (ID, NAME,EMAIL,TELEPHONE,ADDRESS,REMARKS,CITY,AGE,IMAGE,PROPERTY_ID,TASK_ID) VALUES (26, 'Alea', 'vulputate@orciUt.ca', '971587474199', 'JLT Cluster L','Alea remarks', 'Leominster', 33, 'image', 1,1);

