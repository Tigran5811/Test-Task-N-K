export const getMapEmployees = (data) => data?.map(({
  name, surname, email, position, id,
}) => ({
  col1: name,
  col2: surname,
  col3: email,
  col4: position,
  col5: id,
}));
