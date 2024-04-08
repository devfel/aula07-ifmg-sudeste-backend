const express = require("express");
const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());

/**
 * Métodos HTTP:
 * GET: Buscar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT/PATCH: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 *
 * Tipos de parâmetros:
 * Route Params (Path Params): Identificar recursos (Atualizar/Deletar/Buscar Específico)
 * Query Params: Filtros e paginação
 * Request Body: Conteúdo na hora de criar ou editar um recurso (JSON)
 */

const devices = [
  {
    id: "d925ee66-667d-41d2-ab82-6d0c2b045ecf",
    type: "switch",
    model: "Cisco Catalyst 9300",
    serial_number: "FTX1234W0YZ",
    mac_address: "00:1B:44:11:3A:B7",
    firmware_version: "IOS-XE 16.9.3",
    purchase_date: "2020-03-15",
    location: "Data Center Principal - Rack 7",
  },
  {
    id: "113d6622-6c11-49e7-b59e-6443119b01df",
    type: "roteador",
    model: "Juniper Networks SRX300",
    serial_number: "ZJX1234H2A8",
    mac_address: "54:E0:32:D1:C7:E9",
    firmware_version: "JunOS 15.1X49-D170.4",
    purchase_date: "2021-06-22",
    location: "Sala de Equipamentos - Andar 2",
  },
];

// GET all devices (WITH OPTIONAL FILTER)
app.get("/devices", (request, response) => {
  const { model } = request.query;

  const results = model ? devices.filter((device) => device.model.includes(model)) : devices;

  return response.json(results);
});

// GET specific device
app.get("/devices/:id", (request, response) => {
  const { id } = request.params;

  const deviceIndex = devices.findIndex((device) => device.id === id);
  if (deviceIndex < 0) {
    return response.status(400).json({ error: "Device not found" });
  }
  const device = devices[deviceIndex];

  return response.json(device);
});

// POST device
app.post("/devices", (request, response) => {
  const { type, model, serial_number, mac_address, firmware_version, purchase_date, location } = request.body;

  const device = { id: uuid(), type, model, serial_number, mac_address, firmware_version, purchase_date, location };

  devices.push(device);

  return response.json(device);
});

app.listen(3333, () => {
  console.log("Back-end started! ❤️");
});
