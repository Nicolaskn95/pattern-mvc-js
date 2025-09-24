import { Router } from "express";
import VehicleController from "../controller/vehicleController.js";

const vehicleRoutes = Router();

//listar todos os veículos
vehicleRoutes.get("/", VehicleController.listarTodos);

//mostrar formulário de cadastro
vehicleRoutes.get("/novo", VehicleController.mostrarFormulario);

//mostrar formulário de edição
vehicleRoutes.get("/editar/:id", VehicleController.mostrarFormularioEdicao);

//criar novo veículo
vehicleRoutes.post("/", VehicleController.criar);

//atualizar veículo existente
vehicleRoutes.post("/editar/:id", VehicleController.atualizar);

//excluir veículo
vehicleRoutes.post("/excluir/:id", VehicleController.excluir);

export default vehicleRoutes;
