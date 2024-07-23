import styled from "styled-components";

export const Post = styled.article`
  background: var(--gray-800);
  border-radius: 8px;
  padding: 3rem;
  margin: 2rem;

  & + & {
    margin-top: 2rem;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  border-bottom: 1px solid #ddd;
`;

export const Th = styled.th`
  padding: 10px;
  text-align: left;
  background-color: var(--gray-700);
`;

export const Td = styled.td`
  padding: 10px;
`;

export const AddButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-left: auto;
  margin-right: 1rem;

  &:hover {
    background-color: #218838;
  }
`;

export const ModalContent = styled.div`
  padding: 20px;
  background: var(--gray-800);
  border-radius: 10px;
  margin: auto;
  width: 100%;
  height: 100%;
`;

export const Filters = styled.div`
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ModalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;

  &:hover {
    background-color: #0056b3;
  }
`;

export const FilterButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
`;

export const Field = styled.div`
  margin-bottom: 15px;
`;

export const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 1rem;

  &:hover {
    background-color: #c82333;
  }
`;

export const EditButton = styled.button`
  background-color: #ffc107;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 1rem;

  &:hover {
    background-color: #e0a800;
  }
`;

export const ClearButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;

  &:hover {
    background-color: #c82333;
  }
`;
