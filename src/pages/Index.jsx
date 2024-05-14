import React, { useState } from "react";
import { Container, Tabs, TabList, TabPanels, Tab, TabPanel, Table, Thead, Tbody, Tr, Th, Td, Input, IconButton, Select, HStack, VStack, Box } from "@chakra-ui/react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const initialTasks = [
  { taskName: "Task 1", dueDate: "2023-10-01", priority: "High", status: "Pending", assignedTo: "John Doe" },
  { taskName: "Task 2", dueDate: "2023-10-05", priority: "Medium", status: "Completed", assignedTo: "Jane Smith" },
];

const initialProjects = [
  { projectName: "Project 1", startDate: "2023-09-01", endDate: "2023-12-01", status: "Ongoing", owner: "Alice Johnson" },
  { projectName: "Project 2", startDate: "2023-10-01", endDate: "2024-01-01", status: "Planned", owner: "Bob Brown" },
];

const Index = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [projects, setProjects] = useState(initialProjects);
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [editingProjectIndex, setEditingProjectIndex] = useState(null);

  const handleAddTask = () => {
    setTasks([...tasks, { taskName: "", dueDate: "", priority: "", status: "", assignedTo: "" }]);
  };

  const handleAddProject = () => {
    setProjects([...projects, { projectName: "", startDate: "", endDate: "", status: "", owner: "" }]);
  };

  const handleTaskChange = (index, field, value) => {
    const newTasks = [...tasks];
    newTasks[index][field] = value;
    setTasks(newTasks);
  };

  const handleProjectChange = (index, field, value) => {
    const newProjects = [...projects];
    newProjects[index][field] = value;
    setProjects(newProjects);
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleDeleteProject = (index) => {
    const newProjects = projects.filter((_, i) => i !== index);
    setProjects(newProjects);
  };

  return (
    <Container maxW="container.xl" py={4}>
      <Tabs>
        <TabList>
          <Tab>Tasks</Tab>
          <Tab>Projects</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Task Name</Th>
                  <Th>Due Date</Th>
                  <Th>Priority</Th>
                  <Th>Status</Th>
                  <Th>Assigned To</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {tasks.map((task, index) => (
                  <Tr key={index}>
                    <Td>
                      <Input value={task.taskName} onChange={(e) => handleTaskChange(index, "taskName", e.target.value)} />
                    </Td>
                    <Td>
                      <Input type="date" value={task.dueDate} onChange={(e) => handleTaskChange(index, "dueDate", e.target.value)} />
                    </Td>
                    <Td>
                      <Select value={task.priority} onChange={(e) => handleTaskChange(index, "priority", e.target.value)}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                      </Select>
                    </Td>
                    <Td>
                      <Select value={task.status} onChange={(e) => handleTaskChange(index, "status", e.target.value)}>
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                      </Select>
                    </Td>
                    <Td>
                      <Input value={task.assignedTo} onChange={(e) => handleTaskChange(index, "assignedTo", e.target.value)} />
                    </Td>
                    <Td>
                      <HStack spacing={2}>
                        <IconButton aria-label="Edit" icon={<FaEdit />} onClick={() => setEditingTaskIndex(index)} />
                        <IconButton aria-label="Delete" icon={<FaTrash />} onClick={() => handleDeleteTask(index)} />
                      </HStack>
                    </Td>
                  </Tr>
                ))}
                <Tr>
                  <Td colSpan={6} textAlign="center">
                    <IconButton aria-label="Add Task" icon={<FaPlus />} onClick={handleAddTask} />
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TabPanel>

          <TabPanel>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Project Name</Th>
                  <Th>Start Date</Th>
                  <Th>End Date</Th>
                  <Th>Status</Th>
                  <Th>Owner</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {projects.map((project, index) => (
                  <Tr key={index}>
                    <Td>
                      <Input value={project.projectName} onChange={(e) => handleProjectChange(index, "projectName", e.target.value)} />
                    </Td>
                    <Td>
                      <Input type="date" value={project.startDate} onChange={(e) => handleProjectChange(index, "startDate", e.target.value)} />
                    </Td>
                    <Td>
                      <Input type="date" value={project.endDate} onChange={(e) => handleProjectChange(index, "endDate", e.target.value)} />
                    </Td>
                    <Td>
                      <Select value={project.status} onChange={(e) => handleProjectChange(index, "status", e.target.value)}>
                        <option value="Ongoing">Ongoing</option>
                        <option value="Planned">Planned</option>
                        <option value="Completed">Completed</option>
                      </Select>
                    </Td>
                    <Td>
                      <Input value={project.owner} onChange={(e) => handleProjectChange(index, "owner", e.target.value)} />
                    </Td>
                    <Td>
                      <HStack spacing={2}>
                        <IconButton aria-label="Edit" icon={<FaEdit />} onClick={() => setEditingProjectIndex(index)} />
                        <IconButton aria-label="Delete" icon={<FaTrash />} onClick={() => handleDeleteProject(index)} />
                      </HStack>
                    </Td>
                  </Tr>
                ))}
                <Tr>
                  <Td colSpan={6} textAlign="center">
                    <IconButton aria-label="Add Project" icon={<FaPlus />} onClick={handleAddProject} />
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default Index;
