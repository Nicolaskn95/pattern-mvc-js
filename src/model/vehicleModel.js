export default class VehicleModel {
  constructor() {
    this.vehicles = [
      { id: 1, marca: "Toyota", modelo: "Corolla", ano: 2022, preco: 85000 },
      { id: 2, marca: "Honda", modelo: "Civic", ano: 2021, preco: 78000 },
      { id: 3, marca: "Ford", modelo: "Focus", ano: 2023, preco: 72000 },
    ];
    this.nextId = 4;
  }

  listarTodos() {
    return this.vehicles;
  }

  buscarPorId(id) {
    return this.vehicles.find((vehicle) => vehicle.id === parseInt(id));
  }

  adicionar(vehicleData) {
    const novoVeiculo = {
      id: this.nextId++,
      marca: vehicleData.marca,
      modelo: vehicleData.modelo,
      ano: parseInt(vehicleData.ano),
      preco: parseFloat(vehicleData.preco),
    };
    this.vehicles.push(novoVeiculo);
    return novoVeiculo;
  }

  editar(id, vehicleData) {
    const index = this.vehicles.findIndex(
      (vehicle) => vehicle.id === parseInt(id)
    );
    if (index !== -1) {
      this.vehicles[index] = {
        id: parseInt(id),
        marca: vehicleData.marca,
        modelo: vehicleData.modelo,
        ano: parseInt(vehicleData.ano),
        preco: parseFloat(vehicleData.preco),
      };
      return this.vehicles[index];
    }
    return null;
  }

  excluir(id) {
    const index = this.vehicles.findIndex(
      (vehicle) => vehicle.id === parseInt(id)
    );
    if (index !== -1) {
      return this.vehicles.splice(index, 1)[0];
    }
    return null;
  }
}
