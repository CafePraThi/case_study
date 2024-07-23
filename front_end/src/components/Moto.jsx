import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from 'react-modal';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { 
  Post, Header, Table, Thead, Tbody, Tr, Th, Td, 
  AddButton, ModalContent, Form, Input, SubmitButton, ClearButton, 
  Label, Field, Select, DeleteButton, EditButton, ModalGrid, Filters, FilterButton
} from './MotoStyles';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

Modal.setAppElement('#root');

const API_URL = 'http://localhost:3000/motos';

export function Moto() {
  const [motos, setMotos] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [newMoto, setNewMoto] = useState({
    marca: "",
    modelo: "",
    ano_fabricacao: "",
    cor: "",
    quilometragem: "",
    status: "",
    categoria: "",
    preco: ""
  });
  const [filters, setFilters] = useState({
    marca: "",
    modelo: "",
    ano_fabricacao: "",
    cor: "",
    quilometragem: "",
    status: "",
    categoria: "",
    precoMin: "",
    precoMax: ""
  });

  useEffect(() => {
    let url = API_URL;
    let query = Object.keys(filters).map(key => {
      if (filters[key]) {
        if (key === 'precoMin') {
          return 'preco[gte]=' + filters[key];
        } else if (key === 'precoMax') {
          return 'preco[lte]=' + filters[key];
        } else {
          return key + '=' + filters[key];
        }
      }
      return '';
    }).filter(Boolean).join('&');
    if (query) url += '?' + query;
  
    axios.get(url) 
      .then(response => {
        setMotos(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, [filters]);

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value
    });
  };

  const clearFilters = () => {
    setFilters({
      marca: "",
      modelo: "",
      ano_fabricacao: "",
      cor: "",
      quilometragem: "",
      status: "",
      categoria: "",
      precoMin: "",
      precoMax: ""
    });
  };

  useEffect(() => {
    axios.get(API_URL) 
      .then(response => {
        setMotos(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const handleInputChange = (event) => {
    setNewMoto({
      ...newMoto,
      [event.target.name]: event.target.value
    });
  };

  const handleEdit = (moto) => {
    setNewMoto(moto);
    setIsEditing(true);
    setEditingId(moto.id);
    setModalIsOpen(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEditing) {
      axios.put(`${API_URL}/${editingId}`, newMoto)
        .then(response => {
          setIsEditing(false);
          setModalIsOpen(false);
          toast.success('Moto atualizada com sucesso!');
          return axios.get(API_URL);
        })
        .then(response => {
          setMotos(response.data);
        })
        .catch(error => {
          console.error('There was an error!', error);
          toast.error('Houve um erro para atualizar a moto!');
        });
    } else {
      axios.post(API_URL, newMoto)
        .then(response => {
          console.log(response);
          console.log(response.data);
          console.log(newMoto);
          setModalIsOpen(false);
          toast.success('Moto criada com Sucesso!');
          return axios.get(API_URL);
        })
        .then(response => {
          setMotos(response.data);
        })
        .catch(error => {
          console.error('There was an error!', error);
          toast.success('Houve um erro para criar a moto!');
        });
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setIsEditing(false);
    setNewMoto({
      marca: "",
      modelo: "",
      ano_fabricacao: "",
      cor: "",
      quilometragem: "",
      status: "",
      categoria: "",
      preco: ""
    });
    axios.get(API_URL)
    .then(response => {
      setMotos(response.data);
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
  };

  const handleDelete = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(response => {
        setMotos(motos.filter(moto => moto.id !== id));
        toast.success('Moto deletada com sucesso!');
      })
      .catch(error => {
        console.error('There was an error!', error);
        toast.success('Houve um erro para deletar a moto!');
      });
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <Post>
      <ToastContainer />
      <Header>
        <h1>Motos</h1>
        <AddButton onClick={openModal}>Add New Moto</AddButton>
        <FilterButton onClick={toggleFilters}>{showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}</FilterButton>
      </Header>
      {showFilters && (
        <Filters>
          <Form onSubmit={e => e.preventDefault()} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '20px' }}>
            <Input name="marca" value={filters.marca} onChange={handleFilterChange} placeholder="Filtrar por Marca" />
            <Input name="modelo" value={filters.modelo} onChange={handleFilterChange} placeholder="Filtrar por Modelo" />
            <Input name="ano_fabricacao" value={filters.ano_fabricacao} onChange={handleFilterChange} placeholder="Filtrar por Ano de Fabricação" />
            <Input name="cor" value={filters.cor} onChange={handleFilterChange} placeholder="Filtrar por Cor" />
            <Input name="quilometragem" value={filters.quilometragem} onChange={handleFilterChange} placeholder="Filtrar por Quilometragem" />
            <Select name="status" value={filters.status} onChange={handleFilterChange}>
              <option value="">Todos</option>
              <option value="Disponível">Disponível</option>
              <option value="Vendida">Vendida</option>
              <option value="Em Manutenção">Em Manutenção</option>
            </Select>
            <Input name="categoria" value={filters.categoria} onChange={handleFilterChange} placeholder="Filtrar por Categoria" />
            <Input name="precoMin" value={filters.precoMin} onChange={handleFilterChange} placeholder="Preço Mínimo" />
            <Input name="precoMax" value={filters.precoMax} onChange={handleFilterChange} placeholder="Preço Máximo" />
          </Form>
          <ClearButton onClick={clearFilters}>Limpar Filtros</ClearButton>
        </Filters>
      )}
      <Table>
        <Thead>
          <Tr>
            <Th>Marca</Th>
            <Th>Modelo</Th>
            <Th>Cor</Th>
            <Th>Ano Fabricação</Th>
            <Th>Quilometragem</Th>
            <Th>Categoria</Th>
            <Th>Preço</Th>
            <Th>Status</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          {motos.map((moto, index) => (
            <Tr key={index}>
              <Td>{moto.marca}</Td>
              <Td>{moto.modelo}</Td>
              <Td>{moto.cor}</Td>
              <Td>{moto.ano_fabricacao}</Td>
              <Td>{moto.quilometragem} Km</Td>
              <Td>{moto.categoria}</Td>
              <Td>{parseFloat(moto.preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Td>
              <Td>{moto.status}</Td>
              <Td>
                <EditButton onClick={() => handleEdit(moto)}><FiEdit2 /></EditButton>
                <DeleteButton onClick={() => handleDelete(moto.id)}><FiTrash2 /></DeleteButton>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add New Moto"
      >
        <ModalContent>
          <Form onSubmit={handleSubmit}>
            <ModalGrid>
              <Field>
                <Label>Marca</Label>
                <Input name="marca" value={newMoto.marca} onChange={handleInputChange} placeholder="Marca" required />
              </Field>
              <Field>
                <Label>Modelo</Label>
                <Input name="modelo" value={newMoto.modelo} onChange={handleInputChange} placeholder="Modelo" required />
              </Field>
              <Field>
                <Label>Cor</Label>
                <Input name="cor" value={newMoto.cor} onChange={handleInputChange} placeholder="Cor" required />
              </Field>
              <Field>
                <Label>Ano de Fabricação</Label>
                <Input name="ano_fabricacao" value={newMoto.ano_fabricacao} onChange={handleInputChange} placeholder="Ano de Fabricação" required />
              </Field>
              <Field>
                <Label>Quilometragem</Label>
                <Input name="quilometragem" value={newMoto.quilometragem} onChange={handleInputChange} placeholder="Quilometragem" required />
              </Field>
              <Field>
                <Label>Status</Label>
                <Select name="status" value={newMoto.status} onChange={handleInputChange} required>
                  <option value="Disponível">Disponível</option>
                  <option value="Vendida">Vendida</option>
                  <option value="Em Manutenção">Em Manutenção</option>
                </Select>
              </Field>
              <Field>
                <Label>Categoria</Label>
                <Input name="categoria" value={newMoto.categoria} onChange={handleInputChange} placeholder="Categoria" required />
              </Field>
              <Field>
                <Label>Preço</Label>
                <Input name="preco" value={newMoto.preco} onChange={handleInputChange} placeholder="Preço" required />
              </Field>
            </ModalGrid>
            <SubmitButton type="submit">{isEditing ? 'Atualizar Moto' : 'Adicionar Moto'}</SubmitButton>
          </Form>
        </ModalContent>
      </Modal>
    </Post>
  );
}
