import VehicleModel from "../model/vehicleModel.js";

const vehicleModel = new VehicleModel();

const VehicleController = {
  listarTodos: (req, res) => {
    const vehicles = vehicleModel.listarTodos();
    res.render("vehicleList", {
      vehicles,
      successMessage: req.flash("success"),
      errorMessage: req.flash("error"),
    });
  },

  mostrarFormulario: (req, res) => {
    res.render("vehicleForm", {
      vehicle: null,
      titulo: "Cadastrar Veículo",
      successMessage: req.flash("success"),
      errorMessage: req.flash("error"),
    });
  },

  mostrarFormularioEdicao: (req, res) => {
    const id = req.params.id;
    const vehicle = vehicleModel.buscarPorId(id);

    if (!vehicle) {
      req.flash("error", "Veículo não encontrado");
      return res.redirect("/vehicles");
    }

    res.render("vehicleForm", {
      vehicle,
      titulo: "Editar Veículo",
      successMessage: req.flash("success"),
      errorMessage: req.flash("error"),
    });
  },

  criar: (req, res) => {
    const { marca, modelo, ano, preco } = req.body;

    if (!marca || !modelo || !ano || !preco) {
      req.flash("error", "Todos os campos são obrigatórios");
      return res.status(400).render("vehicleForm", {
        vehicle: null,
        titulo: "Cadastrar Veículo",
      });
    }

    try {
      const novoVeiculo = vehicleModel.adicionar({ marca, modelo, ano, preco });
      req.flash(
        "success",
        `Veículo ${novoVeiculo.marca} ${novoVeiculo.modelo} cadastrado com sucesso!`
      );
      res.redirect("/vehicles");
    } catch (error) {
      req.flash("error", "Erro ao cadastrar veículo. Tente novamente.");
      res.redirect("/vehicles/novo");
    }
  },

  atualizar: (req, res) => {
    const id = req.params.id;
    const { marca, modelo, ano, preco } = req.body;

    if (!marca || !modelo || !ano || !preco) {
      req.flash("error", "Todos os campos são obrigatórios");
      const vehicle = vehicleModel.buscarPorId(id);
      return res.status(400).render("vehicleForm", {
        vehicle,
        titulo: "Editar Veículo",
      });
    }

    try {
      const veiculoAtualizado = vehicleModel.editar(id, {
        marca,
        modelo,
        ano,
        preco,
      });

      if (!veiculoAtualizado) {
        req.flash("error", "Veículo não encontrado");
        return res.redirect("/vehicles");
      }

      req.flash(
        "success",
        `Veículo ${veiculoAtualizado.marca} ${veiculoAtualizado.modelo} atualizado com sucesso!`
      );
      res.redirect("/vehicles");
    } catch (error) {
      req.flash("error", "Erro ao atualizar veículo. Tente novamente.");
      res.redirect(`/vehicles/editar/${id}`);
    }
  },

  excluir: (req, res) => {
    const id = req.params.id;

    try {
      const veiculoExcluido = vehicleModel.excluir(id);

      if (!veiculoExcluido) {
        req.flash("error", "Veículo não encontrado");
        return res.redirect("/vehicles");
      }

      req.flash(
        "success",
        `Veículo ${veiculoExcluido.marca} ${veiculoExcluido.modelo} excluído com sucesso!`
      );
      res.redirect("/vehicles");
    } catch (error) {
      req.flash("error", "Erro ao excluir veículo. Tente novamente.");
      res.redirect("/vehicles");
    }
  },
};

export default VehicleController;
