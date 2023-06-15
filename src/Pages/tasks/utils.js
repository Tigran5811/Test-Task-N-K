export const getMapTasks = (employees) => employees?.map(({
  name, description, startDate, endDate, employeeId, id,
}) => ({
  col1: name,
  col2: description,
  col3: startDate,
  col4: endDate,
  col5: id,
  col6: employeeId,

}));
