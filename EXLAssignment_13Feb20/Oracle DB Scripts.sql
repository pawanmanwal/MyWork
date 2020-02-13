CREATE TABLE EMPLOYEE
  (
    ID NUMBER(10) PRIMARY KEY,
    FIRST_NAME NVARCHAR2(35),
    LAST_NAME NVARCHAR2(35),
    JOB_TITLE NVARCHAR2(50),
    STARTDATE DATE,
    ENDDATE DATE
  )
  
CREATE SEQUENCE ID_SEQ INCREMENT BY 1
  START WITH 10 MAXVALUE 100000 MINVALUE 10;
  
    
insert into EMPLOYEE values(1,'Pawan', 'Singh','GL',sysdate-720,sysdate+10);
insert into EMPLOYEE values(2,'Ashish', 'Gupta','GL',sysdate-320,sysdate+100);
insert into EMPLOYEE values(3,'Shashank', 'Trivedi','BSA',sysdate-100,sysdate+1);
insert into EMPLOYEE values(4,'Sakshi', 'Khanna','GL',sysdate-250,sysdate+200);