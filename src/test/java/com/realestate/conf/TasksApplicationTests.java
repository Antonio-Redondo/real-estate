package com.realestate.conf;

import com.realestate.api.APIResponse;
import com.realestate.controller.EmployeeController;
import com.realestate.controller.PropertyController;
import com.realestate.controller.TaskController;
import com.realestate.dto.EmployeeDTO;
import com.realestate.dto.PropertyDTO;
import com.realestate.dto.TaskDTO;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TasksApplicationTests {

    @Autowired
    private EmployeeController employeeController;
    @Autowired
    private TaskController taskController;
    @Autowired
    private PropertyController propertyController;


	@Test
	public void contextLoads() {
	}

	@Test
    public void fetchAllEmployees(){
        try {
            APIResponse response = this.employeeController.fetchAll();
            Assert.assertNotNull(response);
        } catch (Exception e) {

        }
    }

    @Test
    public void fetchAllTasks(){
        try {
            APIResponse response = this.taskController.fetchAll();
            Assert.assertNotNull(response);
        } catch (Exception e) {

        }
    }

    @Test
    public void fetchAllProperties(){
        try {
            APIResponse response = this.propertyController.fetchAll();
            Assert.assertNotNull(response);
        } catch (Exception e) {

        }
    }

    @Test
    public void deleteEmployee(){
        try {
            APIResponse response = this.employeeController.deleteEmployee(1);
            Assert.assertNotNull(response);
        } catch (Exception e) {

        }
    }

    @Test
    public void deleteTask(){
        try {
            APIResponse response = this.taskController.deleteTask(1);
            Assert.assertNotNull(response);
        } catch (Exception e) {

        }
    }

    @Test
    public void deleteProperty(){
        try {
            APIResponse response = this.propertyController.deleteProperty(1);
            Assert.assertNotNull(response);
        } catch (Exception e) {

        }
    }

}
