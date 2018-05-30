import React from 'react';
import { Scence, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle>
      <Scence key="root" hideNavBar>
        <Scence key="auth">
          <Scence key="login" component={LoginForm} title="Please Login" initial />
        </Scence>
        <Scence key="main">
          <Scence
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            initial
          />
          <Scence key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
          <Scence key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
        </Scence>
      </Scence>
    </Router>
  );
};

export default RouterComponent;
